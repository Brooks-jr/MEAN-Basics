import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { StatusGameComponent } from './status-game/status-game.component';
import { PlayersAddplayerComponent } from './players-addplayer/players-addplayer.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  { path: 'players/list', component: PlayersListComponent },
  { path: 'staus/game/:id', component: StatusGameComponent },
  { path: 'players/addplayer', component: PlayersAddplayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
