import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnasheedComponent } from './addnasheed.component';

describe('AddnasheedComponent', () => {
  let component: AddnasheedComponent;
  let fixture: ComponentFixture<AddnasheedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnasheedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnasheedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
