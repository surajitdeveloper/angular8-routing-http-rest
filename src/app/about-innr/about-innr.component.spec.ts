import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInnrComponent } from './about-innr.component';

describe('AboutInnrComponent', () => {
  let component: AboutInnrComponent;
  let fixture: ComponentFixture<AboutInnrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutInnrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
