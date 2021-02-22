import React from 'react';
import {create} from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { OptionsContainer } from './OptionsContainer';

const handleChoiceSelection = jest.fn();

const getComponent = () => <OptionsContainer choices={{playerOne: null, playerTwo: null }} handleChoiceSelection={handleChoiceSelection}/>

test('OptionsContainer Component snapshot', () => {
    const component = create(getComponent()).toJSON();
    expect(component).toMatchSnapshot();
});

test('renders OptionsContainer Component', () => {
  render(getComponent());
  const images = screen.getAllByRole('img', {hidden: true});
  images.forEach(image => expect(image).toBeInTheDocument())
});

test('OptionsContainer buttons register click', () => {
    render(getComponent());
    const images = screen.getAllByRole('img', {hidden: true});
    images.forEach(image => fireEvent.click(image))
    expect(handleChoiceSelection).toHaveBeenCalledTimes(images.length)
  });
