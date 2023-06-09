import type { Meta, StoryObj } from "@storybook/react";

import { Logo } from "./Logo";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Logo> = {
  title: "Logo",
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {};
