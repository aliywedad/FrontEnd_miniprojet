import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingBookComponent } from './borrowing-book.component';

describe('BorrowingBookComponent', () => {
  let component: BorrowingBookComponent;
  let fixture: ComponentFixture<BorrowingBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowingBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
