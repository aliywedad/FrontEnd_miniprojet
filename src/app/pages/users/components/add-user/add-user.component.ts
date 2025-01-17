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
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
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
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent implements OnInit  {
constructor(private service: UsersServicesComponent,private sharedData: SharedDataService,private router: Router) { }
 
 
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
user: any = {
       
    username: '',
    email: "",
    status: "",
    password: "",
    role: "user",
  
  };

onSubmit() {
  this.service.addUser(this.user).subscribe(res => {
    console.log(res);
  });
}
 
  showInputsdata(){
    console.log(this.user);
  }


}
