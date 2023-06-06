import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnasheedstatusComponent } from './editnasheedstatus.component';

describe('EditnasheedstatusComponent', () => {
  let component: EditnasheedstatusComponent;
  let fixture: ComponentFixture<EditnasheedstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnasheedstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditnasheedstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
