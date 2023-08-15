import Button from '../Button';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

const meta: Meta<typeof Button> = {
  component: Button,
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
    onPress: action('Button clicked', {
      allowUndefined: false,
      allowFunction: true,
    }),
  },
};
