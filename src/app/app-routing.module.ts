import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DebateCardsComponent} from './page-content/debate-cards/debate-cards.component';
import {ChannelsListPageComponent} from './page-content/channels-list-page/channels-list-page.component';
import {CreateChannelComponent} from './page-content/create-channel/create-channel.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: DebateCardsComponent},
  {path: 'channels', component: ChannelsListPageComponent},
  {path: 'create-channel', component: CreateChannelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
