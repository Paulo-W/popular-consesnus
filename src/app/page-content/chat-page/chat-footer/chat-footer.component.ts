import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {faUpload} from '@fortawesome/free-solid-svg-icons';
import {DebateTeams} from '../../../custom-types';
import {TeamService} from '../../../services/team/team.service';
import {MessageService} from '../../../services/message/message.service';
import {Predictions} from 'aws-amplify';
import {IdentifyLabelsInput} from '@aws-amplify/predictions/src/types/index';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.sass']
})
export class ChatFooterComponent implements OnInit {

  @Input() teams: DebateTeams;
  @Input() team1Name: string;
  @Input() team2Name: string;

  @ViewChild('content') myModal;

  faUpload = faUpload;

  message: string = null;
  file: File;
  fileType: string;

  finished: false;
  isFirstTeam: boolean;
  isSecondTeam: boolean;

  url: string | ArrayBuffer = null;
  callingBackend = false;

  constructor(
    private modalService: NgbModal,
    private teamService: TeamService,
    private messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    this.subscribeToTeams();
  }

  private subscribeToTeams() {
    this.teamService.isFirstTeam.subscribe(item => this.isFirstTeam = item);
    this.teamService.isSecondTeam.subscribe(item => this.isSecondTeam = item);
  }

  getPlaceHolder(): string {
    if (this.finished) {
      return 'You can not contribute to the debate it has finished';
    } else if (this.isFirstTeam === false && this.isSecondTeam === false) {
      return 'You must join a team to write an argument';
    } else if (this.isFirstTeam === true) {
      return `Post Something in ${this.team1Name}`;
    } else if (this.isSecondTeam) {
      return `Post Something in ${this.team2Name}`;
    }
    return '';
  }

  onSubmit() {
    if (!this.url) {
      if (!this.message) {
        return;
      } else if (!this.message.trim()) {
        return;
      }
    }

    if (this.isFirstTeam) {
      console.log('Saving message');
      this.saveMessage(this.teams.team1.id);
    } else {
      this.saveMessage(this.teams.team2.id);
    }
  }

  saveMessage(id: string) {
    this.callingBackend = true;
    this.messageService.createMessage(id, this.message, this.file, this.fileType).then(() => {
        this.callingBackend = false;
        this.url = null;
        this.message = null;
      }
    );
  }

  onFileSelected(event) {
    if (event.target.files) {
      this.file = event.target.files[0];
      this.predictSafeContent();
      this.callingBackend = true;

      this.fileType = this.getFileType(event.target.files[0].name);

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (ev) => {
        this.url = reader.result;
      };
    }
  }

  private getFileType(name: any): string {
    return name.substring(name.lastIndexOf('.') + 1);
  }

  private predictSafeContent() {
    console.log('Making predictions');
    Predictions.identify(this.getLabelsInput()).then(response => {
      this.callingBackend = false;
      if (response.unsafe === 'YES' || response.unsafe === 'UNKNOWN') {
        this.unsafeImage();
      }
    });
  }

  private getLabelsInput(): IdentifyLabelsInput {
    return {
      labels: {
        source: {
          file: this.file
        },
        type: 'UNSAFE'
      }
    } as IdentifyLabelsInput;
  }

  private unsafeImage() {
    this.file = null;
    this.url = null;
    this.open(this.myModal);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}).result.then();
  }


}
