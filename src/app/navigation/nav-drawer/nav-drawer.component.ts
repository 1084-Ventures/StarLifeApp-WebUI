import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

interface NavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-nav-drawer',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css']
})
export class NavDrawerComponent {
  @Input() isDrawerOpen = true;

  navItems: NavItem[] = [
    { label: 'Brand 1', route: '/brand-1' },
    { label: 'Brand 2', route: '/brand-2' },
    { label: 'Brand 3', route: '/brand-3' }
  ];
}
