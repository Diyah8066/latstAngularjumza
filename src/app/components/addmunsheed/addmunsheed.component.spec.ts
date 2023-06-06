import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmunsheedComponent } from './addmunsheed.component';

describe('AddmunsheedComponent', () => {
  let component: AddmunsheedComponent;
  let fixture: ComponentFixture<AddmunsheedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmunsheedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmunsheedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
