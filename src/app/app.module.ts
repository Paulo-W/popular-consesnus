import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SideNavComponent} from './side-nav/side-nav.component';
import {PageContentComponent} from './page-content/page-content.component';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SecondNavComponent} from './second-nav/second-nav.component';
import {PageComponent} from './page/page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {UserBadgeComponent} from './side-nav/user-badge/user-badge.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {DebateCardsComponent} from './page-content/debate-cards/debate-cards.component';
import {CreateDebateComponent} from './page-content/create-debate/create-debate.component';
import {CreateChannelComponent} from './page-content/create-channel/create-channel.component';
import {ChatPageComponent} from './page-content/chat-page/chat-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import {ChatFooterComponent} from './page-content/chat-page/chat-footer/chat-footer.component';
import {ChatBodyComponent} from './page-content/chat-page/chat-body/chat-body.component';
import {MessageBoxComponent} from './page-content/chat-page/chat-body/message-box/message-box.component';
import {UpdateProfileComponent} from './page-content/update-profile/update-profile.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {ChannelsListPageComponent} from './page-content/channels-list-page/channels-list-page.component';
import {ChannelListComponent} from './page-content/channels-list-page/channel-list/channel-list.component';
import {InvalidFormComponent} from './invalid-form/invalid-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    PageContentComponent,
    SecondNavComponent,
    PageComponent,
    UserBadgeComponent,
    DebateCardsComponent,
    CreateDebateComponent,
    CreateChannelComponent,
    ChatPageComponent,
    ChatFooterComponent,
    ChatBodyComponent,
    MessageBoxComponent,
    UpdateProfileComponent,
    NavbarComponent,
    ChannelsListPageComponent,
    ChannelListComponent,
    InvalidFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    MatRadioModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatExpansionModule
  ],
  exports: [
    MatIconModule, MatToolbarModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
