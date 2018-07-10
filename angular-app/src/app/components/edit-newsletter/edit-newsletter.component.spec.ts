import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewsletterComponent } from './edit-newsletter.component';

describe('EditNewsletterComponent', () => {
  let component: EditNewsletterComponent;
  let fixture: ComponentFixture<EditNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
