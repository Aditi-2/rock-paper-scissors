import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { create } from "react-test-renderer";
import { GameTypeSelection } from "./GameTypeSelection";

const onGameSelect = jest.fn();

const getComponent = () => <GameTypeSelection onGameSelection={onGameSelect} />;

test("GameTypeSelection Component snapshot", () => {
  const component = create(getComponent()).toJSON();
  expect(component).toMatchSnapshot();
});

test("renders GameTypeSelection Component", () => {
  render(getComponent());
  const allVs = screen.getAllByText(/v\/s/i);
  allVs.forEach((vs) => expect(vs).toBeInTheDocument());
});

test("GameTypeSelection buttons register click", () => {
  render(getComponent());
  const images = screen.getAllByRole("img", { hidden: true });
  images.forEach((image) => fireEvent.click(image));
  expect(onGameSelect).toHaveBeenCalledTimes(images.length);
});
