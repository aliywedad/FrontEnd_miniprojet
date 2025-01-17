import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { TablerIconsModule } from 'angular-tabler-icons';
import { LiversService } from 'src/app/services/liver.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { MatDialog } from '@angular/material/dialog';
import { BorrowingBookComponent } from './components/borrowing-book/borrowing-book.component';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { Router } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';
 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,BorrowingBookComponent, MatChipsModule, TablerIconsModule, MatButtonModule, MatIconModule],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit {
livers: any[] = [];
 

constructor(private myService: LiversService,private SharedData: SharedDataService,
  private router: Router,
  private dialog: MatDialog
) { }



checkData(): void {
  const user = this.SharedData.getData('user');
  if (!user) {
    // If no user data is found, redirect to login or home
    console.error('No user data found. Redirecting to login.');
    this.router.navigate(['/']);
  } else {
    console.log('User data found:', user);
  }
}
  ngOnInit(): void {
    this.checkData()  

    this.getLivreData()
    console.log('the shared data from the hompage:', this.SharedData.getData('user').id);
      
      }
      OpenDialog(book:any) {
         
        const dialogRef = this.dialog.open(BorrowingBookComponent, {
          data: book,
        });

        dialogRef.afterClosed().subscribe((result) => {
          // Handle dialog close result here
            
            this.getLivreData()
            
          
        });

      }
      getLivreData(): void {
        this.myService.getLiverData().subscribe((data: any) => {
          console.log(data);
          this.livers = data;  
        });
        
      }



}
