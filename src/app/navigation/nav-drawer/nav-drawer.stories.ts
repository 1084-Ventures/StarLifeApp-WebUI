import { Meta, StoryFn } from '@storybook/angular';
import { NavDrawerComponent } from './nav-drawer.component';

export default {
  title: 'Navigation/NavDrawer',
  component: NavDrawerComponent,
  parameters: {
    docs: {
      description: {
        component: 'A navigation drawer component using Angular Material.',
      },
    },
  },
} as Meta;

const Template: StoryFn<NavDrawerComponent> = (args: NavDrawerComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    storyDescription: 'The default state of the navigation drawer.',
  },
};
