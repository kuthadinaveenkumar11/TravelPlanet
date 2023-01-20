import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabledbComponent } from './tabledb.component';

describe('TabledbComponent', () => {
  let component: TabledbComponent;
  let fixture: ComponentFixture<TabledbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabledbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabledbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
