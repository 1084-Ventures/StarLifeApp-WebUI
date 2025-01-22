import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

// Add this head tag to include Material Icons
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      story: {
        inline: true,
      },
    },
    // Add this to include Material Icons font in Storybook
    head: {
      components: [
        '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'
      ],
    },
  },
};

export default preview;
