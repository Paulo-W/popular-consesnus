import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DebateCardsComponent} from './page-content/debate-cards/debate-cards.component';
import {ChannelsListPageComponent} from './page-content/channels-list-page/channels-list-page.component';
import {CreateChannelComponent} from './page-content/create-channel/create-channel.component';
import {CreateDebateComponent} from './page-content/create-debate/create-debate.component';
import {ChatPageComponent} from './page-content/chat-page/chat-page.component';
import {ChannelDetailPageComponent} from './page-content/channel-detail-page/channel-detail-page.component';
import {MyDebatesComponent} from './page-content/my-debates/my-debates.component';
import {AuthComponent} from './auth/auth.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: AuthComponent},
  {path: 'home', component: DebateCardsComponent},
  {path: 'channels', component: ChannelsListPageComponent},
  {path: 'create-channel', component: CreateChannelComponent},
  {path: 'create-debate', component: CreateDebateComponent},
  {path: 'debate/:id', component: ChatPageComponent},
  {path: 'channel/:name', component: ChannelDetailPageComponent},
  {path: 'my-debates', component: MyDebatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
