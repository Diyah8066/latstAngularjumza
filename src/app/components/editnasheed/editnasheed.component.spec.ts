import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnasheedComponent } from './editnasheed.component';

describe('EditnasheedComponent', () => {
  let component: EditnasheedComponent;
  let fixture: ComponentFixture<EditnasheedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnasheedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditnasheedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
