import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewingPageComponent } from './viewing-page.component';

describe('ViewingPageComponent', () => {
  let component: ViewingPageComponent;
  let fixture: ComponentFixture<ViewingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
