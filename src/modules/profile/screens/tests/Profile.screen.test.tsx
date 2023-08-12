import React from 'react';
import {describe, expect, it} from '@jest/globals';
import {render} from '@testing-library/react-native';
import ProfileScreen from '../Profile';

describe('Profile Screen', () => {
  it('renders the greeting message', () => {
    const {getByText} = render(<ProfileScreen />);

    expect(getByText('Hello from Profile screen')).toBeTruthy();
  });
});
