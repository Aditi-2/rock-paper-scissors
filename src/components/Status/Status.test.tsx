import React from 'react';
import {create} from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Status } from './Status';

const getComponent = () => <Status gameType="PLAYER_VS_COMPUTER" gameStatus="DRAW" />

test('Status Component snapshot', () => {
    const component = create(getComponent()).toJSON();
    expect(component).toMatchSnapshot();
});

test('renders Status Component', () => {
  render(getComponent());
  const statusText = screen.getByText(/Draw!/i);
  expect(statusText).toBeInTheDocument();
});

