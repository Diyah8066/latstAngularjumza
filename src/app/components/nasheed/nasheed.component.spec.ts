import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasheedComponent } from './nasheed.component';

describe('NasheedComponent', () => {
  let component: NasheedComponent;
  let fixture: ComponentFixture<NasheedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasheedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NasheedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
