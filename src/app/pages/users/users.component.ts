import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { UsersServicesComponent } from 'src/app/services/UsersServices';
import { usersData } from './type';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';


const PRODUCT_DATA: any = [
 
  {
    id: 4,
    name: 'mohamed aliy ahmed',
    email: 'mohamedaliy@gmail.com',
    role: "admin",
    status: 'confirmed',
    created_at:'2023-04-05',
    updated_at:'2023-04-05',
  },
 
];



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    AddUserComponent
  ],  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent  implements OnInit{
  constructor(private myService: UsersServicesComponent,private dialog: MatDialog,private router: Router,private sharedData : SharedDataService ) {}
  checkData(): void {
    const user = this.sharedData.getData('admin');
    if (!user) {
      // If no user data is found, redirect to login or home
      console.error('No user data found. Redirecting to login.');
      this.router.navigate(['/']);
    } else {
      console.log('User data found:', user);
    }
  }


  users: any = [];
  ngOnInit(): void {
    this.getUserData();
    this. checkData();
   
  
  } 

  getUserData(): void {
    this.myService.getUserData().subscribe((data) => {
      console.log(data);
      this.users = data;  
    });}


  


showAddUserDialog() {
    const dialogRef = this.dialog.open(AddUserComponent);
  
    dialogRef.afterClosed().subscribe((result) => {
      this.getUserData();
    });
  }
  showEditUserDialog(user: any) {
    const dialogRef = this.dialog.open(EditUserComponent,{data: user });

    dialogRef.afterClosed().subscribe((result) => {
    
    });
  
  }

  deleteUser(id: number) {
    this.myService.deteleUser(id).subscribe(() => {
      this.getUserData();
    });
  }


  // users = PRODUCT_DATA;
  trackByName(index: number, user: any): string {
    return user.name; // Use a unique identifier like `user.id` or `user.name`
  }
}
