import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { PlayersListComponent } from './players-list/players-list.component';
import { StatusGameComponent } from './status-game/status-game.component';
import { PlayersAddplayerComponent } from './players-addplayer/players-addplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    StatusGameComponent,
    PlayersAddplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule 
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
