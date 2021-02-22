import React from "react";
import { create } from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";
import { CustomButton } from "./CustomButton";

const onClick = jest.fn();

const getComponent = () => <CustomButton label="button" onClick={onClick} />;

test("CustomButton Component snapshot", () => {
  const component = create(getComponent()).toJSON();
  expect(component).toMatchSnapshot();
});

test("renders CustomButton Component", () => {
  render(getComponent());
  const button = screen.getByText(/button/i);
  expect(button).toBeInTheDocument();
});

test("CustomButton Component onClick is called", () => {
  render(getComponent());
  const button = screen.getByText(/button/i);
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});
