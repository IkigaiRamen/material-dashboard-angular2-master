import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailequipeComponent } from './update-detailequipe.component';

describe('UpdateDetailequipeComponent', () => {
  let component: UpdateDetailequipeComponent;
  let fixture: ComponentFixture<UpdateDetailequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDetailequipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDetailequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
