import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTableExamplesComponent } from './crud-table-examples.component';

describe('CrudTableExamplesComponent', () => {
  let component: CrudTableExamplesComponent;
  let fixture: ComponentFixture<CrudTableExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudTableExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTableExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
