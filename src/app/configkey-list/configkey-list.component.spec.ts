import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigkeyListComponent } from './configkey-list.component';

describe('ConfigkeyListComponent', () => {
  let component: ConfigkeyListComponent;
  let fixture: ComponentFixture<ConfigkeyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigkeyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigkeyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
