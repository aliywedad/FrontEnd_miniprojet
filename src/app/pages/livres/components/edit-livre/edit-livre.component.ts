 



import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { LiversService } from 'src/app/services/liver.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LivresComponent } from '../../livres.component';

@Component({
  selector: 'app-edit-livre',
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
  templateUrl: './edit-livre.component.html',
  styleUrl: './edit-livre.component.scss'
})
export class EditLivreComponent {


  constructor(private service: LiversService,
    public dialogRef: MatDialogRef<LivresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,  


  ) { }
 
 
  
     
    livre: any = this.data;
  onSubmit() {
    this.service.updateLiver(this.livre).subscribe(res => {
      console.log(res);
      this. onClose()
      
    });
  }
 
  onClose() {
    this.dialogRef.close();
    
  
  }

}
