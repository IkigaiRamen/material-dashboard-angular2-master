import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailequipeComponent } from './add-detailequipe.component';

describe('AddDetailequipeComponent', () => {
  let component: AddDetailequipeComponent;
  let fixture: ComponentFixture<AddDetailequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetailequipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDetailequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
