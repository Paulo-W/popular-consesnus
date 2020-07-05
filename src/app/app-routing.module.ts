import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DebateCardsComponent} from './page-content/debate-cards/debate-cards.component';
import {ChannelsListPageComponent} from './page-content/channels-list-page/channels-list-page.component';
import {CreateChannelComponent} from './page-content/create-channel/create-channel.component';
import {CreateDebateComponent} from './page-content/create-debate/create-debate.component';
import {ChatPageComponent} from './page-content/chat-page/chat-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: DebateCardsComponent},
  {path: 'channels', component: ChannelsListPageComponent},
  {path: 'create-channel', component: CreateChannelComponent},
  {path: 'create-debate', component: CreateDebateComponent},
  {path: 'debate/:id', component: ChatPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
