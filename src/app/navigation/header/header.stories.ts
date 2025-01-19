import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { moduleMetadata } from '@storybook/angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meta: Meta<HeaderComponent> = {
  title: 'Navigation/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule
      ],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  args: {},
};

export const LoggedOut: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Header state when user is logged out',
      },
    },
  },
};
