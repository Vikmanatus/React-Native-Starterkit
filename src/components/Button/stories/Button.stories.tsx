import {ButtonSizes} from '../../../types/styles';
import Button from '../Button';
import type {Meta, StoryObj} from '@storybook/react';

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
export const SmallButton: Story = {
  name: 'I am the small button',
  render: () => (
    <Button
      size={ButtonSizes.SMALL}
      onPress={() => console.log('Cliked on small button')}
      label="Click me"
    />
  ),
};

export const MediumButton: Story = {
  name: 'I am the medium button',
  render: () => (
    <Button
      size={ButtonSizes.MEDIUM}
      onPress={() => console.log('Cliked on medium button')}
      label="Click me"
    />
  ),
};

export const LargeButton: Story = {
  name: 'I am the large button',
  render: () => (
    <Button
      size={ButtonSizes.LARGE}
      onPress={() => console.log('Cliked on large button')}
      label="Click me"
    />
  ),
};
