import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordHistoryLogComponent } from './password-history-log.component';

describe('PasswordHistoryLogComponent', () => {
  let component: PasswordHistoryLogComponent;
  let fixture: ComponentFixture<PasswordHistoryLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordHistoryLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordHistoryLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
