import React from 'react';
import {create} from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Header from './Header';

const getComponent = () => <Header />

test('Header Component snapshot', () => {
    const component = create(getComponent()).toJSON();
    expect(component).toMatchSnapshot();
});

test('renders Header Component', () => {
  render(getComponent());
  const headerText = screen.getByText(/Waste an hour having fun/i);
  expect(headerText).toBeInTheDocument();
});

