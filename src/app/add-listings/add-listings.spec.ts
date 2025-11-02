import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListings } from './add-listings';

describe('AddListings', () => {
  let component: AddListings;
  let fixture: ComponentFixture<AddListings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddListings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddListings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
