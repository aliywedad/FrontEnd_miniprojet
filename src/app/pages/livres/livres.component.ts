import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { LiversService } from 'src/app/services/liver.service';
import { AddLivreComponent } from './components/add-livre/add-livre.component';
 

@Component({
  selector: 'app-livres',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    AddLivreComponent

  ],
  templateUrl: './livres.component.html',
  styleUrl: './livres.component.scss'
})
export class LivresComponent implements OnInit{
  constructor(private myService: LiversService,private dialog: MatDialog) {}
  livers: any = [

  ];
  ngOnInit(): void {

this.getLivreData()
  
  }
  getLivreData(): void {
    this.myService.getLiverData().subscribe((data: any) => {
      console.log(data);
      this.livers = data;  
    });
    
  }

showAddLivreDialog() {
    const dialogRef = this.dialog.open(AddLivreComponent);
  
    dialogRef.afterClosed().subscribe((result) => {
    this.getLivreData();
    });
  }
  showEditUserDialog(user: any) {
    // const dialogRef = this.dialog.open(EditUserComponent,{data: user });
  
  }

  deleteliver(id: number) {
    this.myService.deleteLiver(id).subscribe(() => {
      this.livers = this.livers.filter((user: any) => user.id !== id);
    });
  }
  updatelivre(id: number) {
    this.myService.updateLiver(id).subscribe(() => {
      this.livers = this.livers.filter((user: any) => user.id !== id);
    });
  }


  // livers = PRODUCT_DATA;
  trackByName(index: number, user: any): string {
    return user.name; // Use a unique identifier like `user.id` or `user.name`
  }
}
