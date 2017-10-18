import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersAddplayerComponent } from './players-addplayer.component';

describe('PlayersAddplayerComponent', () => {
  let component: PlayersAddplayerComponent;
  let fixture: ComponentFixture<PlayersAddplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersAddplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersAddplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
