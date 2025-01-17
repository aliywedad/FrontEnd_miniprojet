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

@Component({
  selector: 'app-add-livre',
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
  templateUrl: './add-livre.component.html',
  styleUrl: './add-livre.component.scss'
})
export class AddLivreComponent {


  constructor(private service: LiversService) { }
 
 
  
     
    livre: any = {
       
      "title": "",
      "author": "",
      "genre": "",
      "publication_year": 2023,
      "available_copies": 0
  
  };
  onSubmit() {
    this.service.addLiver(this.livre).subscribe(res => {
      console.log(res);
    });
  }


}
