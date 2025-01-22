import { Meta, StoryObj } from '@storybook/angular';
import { ToolbarComponent } from '../app/components/toolbar/toolbar.component';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material.module';

const meta: Meta<ToolbarComponent> = {
  title: 'Navigation/Toolbar',
  component: ToolbarComponent,
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
type Story = StoryObj<ToolbarComponent>;

export const Default: Story = {
  args: {
    appName: 'Star Life'
  }
};
