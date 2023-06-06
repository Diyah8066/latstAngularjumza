import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunsheedComponent } from './munsheed.component';

describe('MunsheedComponent', () => {
  let component: MunsheedComponent;
  let fixture: ComponentFixture<MunsheedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunsheedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MunsheedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
