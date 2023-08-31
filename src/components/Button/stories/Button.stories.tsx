import {ButtonSizes} from '../../../types/styles';
import Button from '../Button';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    onPress: {
      control: 'none',
      description: 'Function launched when button is pressed',
      type: 'function',
    },
    size: {
      description: 'The size required for the button',
    },
    label: {
      description: 'Label of the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultButton: Story = {
  name: 'Default button',
  args: {
    label: 'Default',
    size: ButtonSizes.SMALL,
  },
  parameters: {
    controls: {expanded: true},
  },
};
