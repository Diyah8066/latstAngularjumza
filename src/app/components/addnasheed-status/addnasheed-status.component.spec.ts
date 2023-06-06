import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnasheedStatusComponent } from './addnasheed-status.component';

describe('AddnasheedStatusComponent', () => {
  let component: AddnasheedStatusComponent;
  let fixture: ComponentFixture<AddnasheedStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnasheedStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnasheedStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
