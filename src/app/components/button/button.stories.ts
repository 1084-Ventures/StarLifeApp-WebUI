import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'accent', 'warn'],
      description: 'The color scheme of the button'
    },
    variant: {
      control: 'select',
      options: ['basic', 'raised', 'stroked', 'flat'],
      description: 'The variant style of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    }
  },
  args: {
    color: 'primary',
    variant: 'basic',
    disabled: false
  }
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Basic: Story = {
  args: {
    variant: 'basic'
  },
  render: (args) => ({
    props: args,
    template: `<app-button [color]="color" [variant]="variant" [disabled]="disabled">Basic Button</app-button>`
  })
};

export const Raised: Story = {
  args: {
    variant: 'raised'
  },
  render: (args) => ({
    props: args,
    template: `<app-button [color]="color" [variant]="variant" [disabled]="disabled">Raised Button</app-button>`
  })
};

export const Stroked: Story = {
  args: {
    variant: 'stroked'
  },
  render: (args) => ({
    props: args,
    template: `<app-button [color]="color" [variant]="variant" [disabled]="disabled">Stroked Button</app-button>`
  })
};

export const Flat: Story = {
  args: {
    variant: 'flat',
    color: "warn"
  },
  render: (args) => ({
    props: args,
    template: `<app-button [color]="color" [variant]="variant" [disabled]="disabled">Flat Button</app-button>`
  })
};
