import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './navigation/header/header.component';
import { NavDrawerComponent } from './navigation/nav-drawer/nav-drawer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, NavDrawerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StarLife App';
  isDrawerOpen = true;

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
