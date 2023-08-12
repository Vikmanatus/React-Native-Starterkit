import React from 'react';
import {describe, expect, it, jest} from '@jest/globals';
import {render, waitFor} from '@testing-library/react-native';
import App from './App';
import {Linking} from 'react-native';
import {ALLOWED_LINKS} from './types';

// Mock the ServicesManager
jest.mock('./modules/services/ServicesManager', () => {
  return jest.fn().mockImplementation(() => {
    return {
      init: jest.fn(() => Promise.resolve()), // Return a promise that resolves immediately.
    };
  });
});

// Mock crashlytics and Linking
jest.mock('@react-native-firebase/crashlytics', () => {
  return () => ({
    log: jest.fn(),
    crash: jest.fn(),
  });
});

describe('App', () => {
  it('shows "Initializing application services" when app is not ready', async () => {
    const {getByText} = render(<App />);
    await waitFor(() => {
      expect(getByText('Initializing application services')).toBeTruthy();
    });
  });
  it('should render App correctly without universal links', async () => {
    const {getByText} = render(<App />);
    // Wait for the promise and state updates to be reflected in the UI
    await waitFor(() => {
      expect(getByText('Welcome to React-Native Starterkit')).toBeTruthy();
    });
  });

  it('should fake universal links implementation for Login Screen', async () => {
    const initialUrlMock = jest
      .spyOn(Linking, 'getInitialURL')
      .mockResolvedValue(ALLOWED_LINKS.AUTH_ENDPOINT);
    expect(initialUrlMock).toHaveBeenCalled();

    const {getByText} = render(<App />);
    // Wait for the promise and state updates to be reflected in the UI
    await waitFor(() => {
      expect(getByText('Hello from Login screen')).toBeTruthy();
    });
  });

  it('should fake universal links implementation for Profile Screen', async () => {
    const initialUrlMock = jest
      .spyOn(Linking, 'getInitialURL')
      .mockResolvedValue(ALLOWED_LINKS.PROFILE_ENDPOINT);
    expect(initialUrlMock).toHaveBeenCalled();

    const {getByText} = render(<App />);
    // Wait for the promise and state updates to be reflected in the UI
    await waitFor(() => {
      expect(getByText('Hello from Profile screen')).toBeTruthy();
    });
  });

  it('should fake universal links implementation for News Screen', async () => {
    const initialUrlMock = jest
      .spyOn(Linking, 'getInitialURL')
      .mockResolvedValue(ALLOWED_LINKS.NEWS_ENDPOINT);
    expect(initialUrlMock).toHaveBeenCalled();

    const {getByText} = render(<App />);
    // Wait for the promise and state updates to be reflected in the UI
    await waitFor(() => {
      expect(getByText('Hello from News screen')).toBeTruthy();
    });
  });
});
