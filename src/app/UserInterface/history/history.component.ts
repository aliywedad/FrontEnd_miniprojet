 


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
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
         MatTableModule,
         CommonModule,
         MatCardModule,
         FormsModule, // Add FormsModule here

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
  filteredBorrows: any[] = [];  

  ngOnInit(): void {
    this.id=this.sharedData.getData('user').id

this.getLivreData()
  
  }
  getLivreData(): void {
    this.myService.gethistoryData(this.id).subscribe((data: any) => {
      console.log(data);
      this.borrows = data;  
      this.filteredBorrows = data; // Initialize filteredBorrows

    });
    
  }
  searchvalue:string ="";
  onSearchChange(searchValue: string): void {
    console.log('Search query:', searchValue, 'Type:', typeof searchValue);
    if (searchValue=="") {
      // Reset to original data when the search query is empty
      this.filteredBorrows = [...this.borrows];
      console.log('Filtered data 333:', this.filteredBorrows);

    } else {
      // Filter by book name
      this.filteredBorrows = this.borrows.filter((borrow: any) =>
        borrow.book.book_title.toLowerCase().includes(searchValue.toLowerCase())
      );

      console.log('Filtered data:', this.filteredBorrows);
    }
  }
  


  trackByName(index: number, borrow: any): string {
    return borrow.book.name; // Use a unique identifier like `borrow.id` if available
  }
}