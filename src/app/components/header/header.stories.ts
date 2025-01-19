import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<HeaderComponent> = {
  title: 'Components/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [MatToolbarModule, MatIconModule]
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on.*' }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Primary: Story = {
  args: {
    title: 'Star Life App',
  },
};

export const WithSubtitle: Story = {
  args: {
    ...Primary.args,
    subtitle: 'Welcome to the app',
  },
};

export const WithMenu: Story = {
  args: {
    ...Primary.args,
    showMenuButton: true,
  },
};

export const Complete: Story = {
  args: {
    ...WithSubtitle.args,
    showMenuButton: true,
  },
};

export const WithActions: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-header [title]="title">
        <div header-actions>
          <button mat-icon-button aria-label="Settings">
            <mat-icon>settings</mat-icon>
          </button>
        </div>
      </app-header>
    `
  })
};