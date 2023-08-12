import React from 'react';
import {describe, expect, it} from '@jest/globals';
import {render} from '@testing-library/react-native';
import LoginScreen from '../Login';

describe('Login Screen', () => {
  it('renders the greeting message', () => {
    const {getByText} = render(<LoginScreen />);

    expect(getByText('Hello from Login screen')).toBeTruthy();
  });
});
