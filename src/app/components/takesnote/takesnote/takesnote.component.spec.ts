import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakesnoteComponent } from './takesnote.component';

describe('TakesnoteComponent', () => {
  let component: TakesnoteComponent;
  let fixture: ComponentFixture<TakesnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakesnoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakesnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
