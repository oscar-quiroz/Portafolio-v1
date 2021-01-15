import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilListComponent } from './skil-list.component';

describe('SkilListComponent', () => {
  let component: SkilListComponent;
  let fixture: ComponentFixture<SkilListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
