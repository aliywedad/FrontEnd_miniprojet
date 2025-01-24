 



import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { UsersServicesComponent } from 'src/app/services/UsersServices';
import { LiversService } from 'src/app/services/liver.service';
import { BorrowService } from 'src/app/services/borrow.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-borrowing',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
  ],
    templateUrl: './borrowing.component.html',
  styleUrl: './borrowing.component.scss'
})
export class BorrowingComponent implements OnInit {
books:any =[]
users:any =[]

  constructor(
    private livreservice: LiversService,
    private userService: UsersServicesComponent,
    private borrowService: BorrowService,
    public dialogRef: MatDialogRef<BorrowingComponent>,

  
  ) { }
 

  ngOnInit(): void {
    this.livreservice.getLiverData().subscribe((res :any) => {
      this.books = res;
    });
    this.userService.getUserData().subscribe((res: any) => {
      this.users = res;
    });
    
  }
 
  
     
    borrow: any = {
       
      "book": 1,  
      "user": 1,   
      "borrow_date": "2025-01-15",   
      "return_date": "2025-01-30",  
      "penalty": 0.0  ,
      "is_returned":false
  
  };
  onSubmit() {
    this.borrowService.addborrow(this.borrow).subscribe(res => {
      console.log(res);
      this.onClose()
    });
  }

  onClose() {
    this.dialogRef.close();
    
  
  }


}
