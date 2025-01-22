import type { Meta, StoryObj } from '@storybook/angular';
import { AppComponent } from '../app/app.component';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material.module';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../app/components/toolbar/toolbar.component';
import { SidenavComponent } from '../app/components/sidenav/sidenav.component';

const meta: Meta<AppComponent> = {
  title: 'App/MainApp',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        RouterOutlet,
        MaterialModule,
        BrowserAnimationsModule,
        ToolbarComponent,
        SidenavComponent
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<AppComponent>;

export const Default: Story = {
  args: {
    title: 'Star Life'
  }
};
