import React from 'react';
import {create} from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Scores } from './Scores';

const getComponent = () => <Scores gameType="PLAYER_VS_COMPUTER" scores={{playerOne: 2, playerTwo: 3}}/>

test('Scores Component snapshot', () => {
    const component = create(getComponent()).toJSON();
    expect(component).toMatchSnapshot();
});

test('renders Scores Component', () => {
  render(getComponent());
  const playerText = screen.getByText(/You/i);
  expect(playerText).toBeInTheDocument();
});

