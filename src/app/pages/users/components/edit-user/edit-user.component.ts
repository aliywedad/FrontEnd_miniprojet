 



import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { UsersServicesComponent } from 'src/app/services/UsersServices';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Router } from '@angular/router';
import { UsersComponent } from '../../users.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-user',
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
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent implements OnInit  {
constructor(private service: UsersServicesComponent,
  private sharedData: SharedDataService,private router: Router,
  public dialogRef: MatDialogRef<UsersComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any, // Injecting passed data


) { }
 
 
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
    
ngOnInit(): void {
  this.checkData()
}
statuses = [{ value: 'active', viewValue: 'active' }, { value: 'deactive', viewValue: 'deactive' }]
roles = [{ value: 'admin', viewValue: 'admin' }, { value: 'user', viewValue: 'user' }]
user: any = this.data;

onSubmit() {
  this.service.editUser(this.user).subscribe(res => {
    console.log(res);
    this.onClose()
  });
}
 
  showInputsdata(){
    console.log(this.user);
  }

  onClose() {
    this.dialogRef.close();
    
  
  }
}
