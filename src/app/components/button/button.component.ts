import { Component, Input } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MaterialModule, NgSwitch, NgSwitchCase],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() variant: 'basic' | 'raised' | 'stroked' | 'flat' = 'basic';
  @Input() disabled = false;
}
