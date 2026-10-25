import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaMultiplicar2Component } from './tabla-multiplicar2-component';

describe('TablaMultiplicar2Component', () => {
  let component: TablaMultiplicar2Component;
  let fixture: ComponentFixture<TablaMultiplicar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaMultiplicar2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaMultiplicar2Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
