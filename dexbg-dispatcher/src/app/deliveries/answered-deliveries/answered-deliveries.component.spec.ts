import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsweredDeliveriesComponent } from './answered-deliveries.component';

describe('AnsweredDeliveriesComponent', () => {
  let component: AnsweredDeliveriesComponent;
  let fixture: ComponentFixture<AnsweredDeliveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnsweredDeliveriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnsweredDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
