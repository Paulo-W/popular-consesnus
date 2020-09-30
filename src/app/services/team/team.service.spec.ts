import {TestBed} from '@angular/core/testing';

import {TeamService} from './team.service';
import {DebateTeams, TeamInfo} from '../../custom-types';

describe('TeamService', () => {
  let service: TeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should count like list: one like each', () => {
    const likedTeam: DebateTeams = {
      team1: {
        id: '1',
        messages: {
          items: [{
            likeUsers: ['1', '2']
          }]
        }
      },
      team2: {
        id: '2',
        messages: {
          items: [{
            likeUsers: ['1']
          }]
        }
      }
    };

    const expected: TeamInfo = {
      team1: {
        isMember: false,
        score: 2
      },
      team2: {
        isMember: false,
        score: 1
      }
    };

    const result = service.mapTeamInfo(likedTeam);
    expect(result).toEqual(expected);
  });
});
