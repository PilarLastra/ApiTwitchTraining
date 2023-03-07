import React from "react";
import { render, screen } from "@testing-library/react";
import { ExampleScreen } from "./ExampleScreen";

test("renders learn react link", () => {
  render(<ExampleScreen />);
  const linkElement = screen.getByText("Welcome to React Training");
  expect(linkElement).toBeInTheDocument();
});
