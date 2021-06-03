import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaulistalstComponent } from './paulistalst.component';

describe('PaulistalstComponent', () => {
  let component: PaulistalstComponent;
  let fixture: ComponentFixture<PaulistalstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaulistalstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaulistalstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
