import { Meta, StoryFn } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material.module';
import { NavDrawerComponent } from './nav-drawer.component';

export default {
  title: 'Navigation/NavDrawer',
  component: NavDrawerComponent,
  decorators: [
    (story) => ({
      template: '<div style="height: 500px;">{{ story }}</div>',
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: 'A navigation drawer component for brand selection using Angular Material.',
      },
    },
  },
} as Meta;

const Template: StoryFn<NavDrawerComponent> = (args: NavDrawerComponent) => ({
  props: args,
  moduleMetadata: {
    imports: [RouterTestingModule, NoopAnimationsModule, MaterialModule],
  },
});

export const Default = Template.bind({});
Default.args = {
  isDrawerOpen: true
};
Default.parameters = {
  docs: {
    storyDescription: 'The default state of the navigation drawer with sample navigation items.',
  },
};

export const Closed = Template.bind({});
Closed.args = {
  isDrawerOpen: false
};
Closed.parameters = {
  docs: {
    storyDescription: 'Navigation drawer in closed state.',
  },
};
