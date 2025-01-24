import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms'; // required for ngModel
import {MatNativeDateModule} from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { BorrowService } from 'src/app/services/borrow.service';



@Component({
  selector: 'app-borrowing-book',
  providers: [  
    
    ],
  imports: [
       
    MatDialogModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, FormsModule],
  templateUrl: './borrowing-book.component.html',
  styleUrls: ['./borrowing-book.component.scss'],
  standalone: true
})
export class BorrowingBookComponent implements OnInit {
  borrow: any;

  constructor(
    private sharedData: SharedDataService,
    private borrowService: BorrowService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<BorrowingBookComponent>
  ) {}

  ngOnInit(): void {
    console.log('Dialog opened with data:', this.data);

    
    this.borrow = {
      "book": this.data?.id,
      "user": this.sharedData.getData('user')?.id,
      "borrow_date": "2025-01-15",
      "return_date": "2025-01-25",
      "penalty": 0.0,
      "is_returned": false,
    };
  }
  
  onClose() {
    this.dialogRef.close();
    
  
  }
  submitBorrowRequest(): void {
    console.log('Borrow request submitted:', this.borrow);
    this.borrowService.addborrow(this.borrow).subscribe(
      (res) => {
        console.log('Borrow request added successfully:', res);
        this.dialogRef.close(); // Close the dialog after the request is submitted
      },
      (err) => {
        console.error('Error submitting borrow request:', err);
        // Optionally handle the error (e.g., show a notification)
      }
    );
     
    // this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
