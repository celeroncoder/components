import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Meta, StoryObj } from "@storybook/react";

import { SelectWithSearchDemo } from "@/registry/default/example/select-with-search-demo";

const meta: Meta<typeof SelectWithSearchDemo> = {
  component: SelectWithSearchDemo,
  parameters: {
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
      defaultViewport: "desktop",
    },
  },
};

export default meta;

export const Desktop: StoryObj<typeof SelectWithSearchDemo> = {};
export const Mobile: StoryObj<typeof SelectWithSearchDemo> = {
  parameters: {
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
      defaultViewport: "mobile1",
    },
  },
};
