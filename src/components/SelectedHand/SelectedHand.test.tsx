import React from 'react';
import {create} from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { SelectedHand } from './SelectedHand';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

const getComponent = () => <SelectedHand type="PLAYER_ONE" icon={faDesktop}/>

test('SelectedHand Component snapshot', () => {
    const component = create(getComponent()).toJSON();
    expect(component).toMatchSnapshot();
});

test('renders SelectedHand Component', () => {
  render(getComponent());
  const image = screen.getByRole('img', {hidden: true});
  expect(image).toBeInTheDocument();
});

