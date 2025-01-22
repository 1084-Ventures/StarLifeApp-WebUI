import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  brands = ['Brand 1', 'Brand 2', 'Brand 3']; // Temporary sample data

  addNewBrand() {
    // TODO: Implement brand creation logic
    console.log('Add new brand clicked');
  }
}
