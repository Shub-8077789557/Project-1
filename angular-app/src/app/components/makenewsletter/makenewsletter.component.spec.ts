import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakenewsletterComponent } from './makenewsletter.component';

describe('MakenewsletterComponent', () => {
  let component: MakenewsletterComponent;
  let fixture: ComponentFixture<MakenewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakenewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakenewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
