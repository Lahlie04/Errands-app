import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerhomeComponent } from './runnerhome.component';

describe('RunnerhomeComponent', () => {
  let component: RunnerhomeComponent;
  let fixture: ComponentFixture<RunnerhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunnerhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
