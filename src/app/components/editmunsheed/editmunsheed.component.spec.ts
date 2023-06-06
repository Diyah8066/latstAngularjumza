import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmunsheedComponent } from './editmunsheed.component';

describe('EditmunsheedComponent', () => {
  let component: EditmunsheedComponent;
  let fixture: ComponentFixture<EditmunsheedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmunsheedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditmunsheedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
