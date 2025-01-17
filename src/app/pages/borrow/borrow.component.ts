import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { BorrowingComponent } from './components/borrowing/borrowing.component';
import { BorrowService } from 'src/app/services/borrow.service';


@Component({
  selector: 'app-borrow',
  standalone: true,
  imports: [
         MatTableModule,
         CommonModule,
         MatCardModule,
         MaterialModule,
         MatIconModule,
         MatMenuModule,
         MatButtonModule,
  ],
  templateUrl: './borrow.component.html',
  styleUrl: './borrow.component.scss'
})
export class BorrowComponent implements OnInit{
  constructor(private myService: BorrowService,private dialog: MatDialog) {}
  borrows: any = [

  ];
  ngOnInit(): void {

this.getLivreData()
  
  }
  getLivreData(): void {
    this.myService.getborrowData().subscribe((data: any) => {
      console.log(data);
      this.borrows = data;  
    });
    
  }

showAddLivreDialog() {
    const dialogRef = this.dialog.open(BorrowingComponent);
  
    dialogRef.afterClosed().subscribe((result) => {
    this.getLivreData();
    });
  }
  showEditUserDialog(user: any) {
    // const dialogRef = this.dialog.open(EditUserComponent,{data: user });
  
  }

  deleteliver(id: number) {
    // this.myService.deteleClient(id).subscribe(() => {
    //   this.borrows = this.borrows.filter((user: any) => user.id !== id);
    // });
  }


  // borrows = PRODUCT_DATA;
  trackByName(index: number, user: any): string {
    return user.name; // Use a unique identifier like `user.id` or `user.name`
  }
}