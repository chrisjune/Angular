import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFollowerComponent } from './git-follower.component';

describe('GitFollowerComponent', () => {
  let component: GitFollowerComponent;
  let fixture: ComponentFixture<GitFollowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitFollowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
