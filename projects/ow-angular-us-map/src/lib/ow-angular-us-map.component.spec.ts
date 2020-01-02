import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwAngularUsMapComponent } from './ow-angular-us-map.component';

describe('OwAngularUsMapComponent', () => {
  let component: OwAngularUsMapComponent;
  let fixture: ComponentFixture<OwAngularUsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwAngularUsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwAngularUsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
