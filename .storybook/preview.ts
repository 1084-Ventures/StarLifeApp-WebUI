import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../src/app/material.module';
import { moduleMetadata } from '@storybook/angular';

setCompodocJson(docJson);

const preview: Preview = {
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, MaterialModule],
    })
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['*']
      }
    },
    docs: {
      autodocs: "tag"
    }
  },
  globalTypes: {
    theme: {
      defaultValue: 'light'
    }
  }
};

export default preview;