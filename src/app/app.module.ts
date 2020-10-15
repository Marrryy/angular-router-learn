import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { CrisesCenterModule } from './crisis-center/crises-center.module';
import { CommonModule } from '@angular/common';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

@NgModule({
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HeroesModule,
    CrisesCenterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
