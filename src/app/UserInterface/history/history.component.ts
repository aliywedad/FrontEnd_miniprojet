 


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
 
import { BorrowService } from 'src/app/services/borrow.service';
import { SharedDataService } from 'src/app/services/shared-data.service';


@Component({
  selector: 'app-history',
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
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit{
  id:number=0
  constructor(private myService: BorrowService,private dialog: MatDialog,private sharedData: SharedDataService) {}
  borrows: any = [

  ];
  ngOnInit(): void {
    this.id=this.sharedData.getData('user').id

this.getLivreData()
  
  }
  getLivreData(): void {
    this.myService.gethistoryData(this.id).subscribe((data: any) => {
      console.log(data);
      this.borrows = data;  
    });
    
  }

  


  // borrows = PRODUCT_DATA;
  trackByName(index: number, user: any): string {
    return user.name; // Use a unique identifier like `user.id` or `user.name`
  }
}