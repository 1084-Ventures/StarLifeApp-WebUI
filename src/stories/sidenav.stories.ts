import type { Meta, StoryObj } from '@storybook/angular';
import { SidenavComponent } from '../app/components/sidenav/sidenav.component';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material.module';

const meta: Meta<SidenavComponent> = {
  title: 'Navigation/Sidenav',
  component: SidenavComponent,
  decorators: [
    moduleMetadata({
      imports: [MaterialModule, BrowserAnimationsModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<SidenavComponent>;

export const Default: Story = {
  args: {
    brands: ['Brand 1', 'Brand 2', 'Brand 3'],
  },
};
