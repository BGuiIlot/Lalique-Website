import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphHygrometrieComponent } from './graph-hygrometrie.component';

describe('GraphHygrometrieComponent', () => {
  let component: GraphHygrometrieComponent;
  let fixture: ComponentFixture<GraphHygrometrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphHygrometrieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphHygrometrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
