import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDetailequipeComponent } from './liste-detailequipe.component';

describe('ListeDetailequipeComponent', () => {
  let component: ListeDetailequipeComponent;
  let fixture: ComponentFixture<ListeDetailequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDetailequipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDetailequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
