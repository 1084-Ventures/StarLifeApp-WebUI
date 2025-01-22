import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  appName = 'Star Life';
  
  onSignOut() {
    // Implement sign out logic
  }
}
