import React from 'react';
import {describe, expect, it} from '@jest/globals';
import {render} from '@testing-library/react-native';
import NewsScreen from '../News';

describe('News Screen', () => {
  it('renders the greeting message', () => {
    const {getByText} = render(<NewsScreen />);

    expect(getByText('Hello from News screen')).toBeTruthy();
  });
});
