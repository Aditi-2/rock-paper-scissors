import React from "react";
import { create } from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";
import { ActionBar } from "./ActionBar";

const onClick = jest.fn();

const getComponent = () => <ActionBar onButtonClick={onClick} />;

test("ActionBar Component snapshot", () => {
  const component = create(getComponent()).toJSON();
  expect(component).toMatchSnapshot();
});

test("renders ActionBar Component", () => {
  render(getComponent());
  const buttonOne = screen.getByText(/Play again/i);
  expect(buttonOne).toBeInTheDocument();
  const buttonTwo = screen.getByText(/End game/i);
  expect(buttonTwo).toBeInTheDocument();
});

test("ActionBar Component onClick is called", () => {
  render(getComponent());
  const buttonOne = screen.getByText(/Play again/i);
  fireEvent.click(buttonOne);
  expect(onClick).toHaveBeenCalledWith("RESTART");

  const buttonTwo = screen.getByText(/End game/i);
  fireEvent.click(buttonTwo);
  expect(onClick).toHaveBeenCalledWith("END");
});
