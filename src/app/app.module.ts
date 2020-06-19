import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
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
import { UserBadgeComponent } from './user-badge/user-badge.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DebateCardsComponent } from './page-content/debate-cards/debate-cards.component';
import {CreateDebateComponent} from './page-content/create-debate/create-debate.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    PageContentComponent,
    SecondNavComponent,
    PageComponent,
    UserBadgeComponent,
    DebateCardsComponent,
    CreateDebateComponent
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
    MatInputModule
  ],
  exports: [
    MatIconModule, MatToolbarModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
