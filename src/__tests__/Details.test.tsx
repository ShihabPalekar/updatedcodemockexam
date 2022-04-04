import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import { screen, fireEvent, render } from "@testing-library/react";
import Details from "../components/Details";

test("Snapshot of Detail component", () => {
  const comp = renderer.create(
    <Details navigate={() => {}} setDetails={() => {}} />
  );
  let tree = comp.toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Details component", () => {
  test("Name input is present", () => {
    render(<Details navigate={() => {}} setDetails={() => {}} />);
    const nameInput = screen.getByLabelText(/Your name/i);
    expect(nameInput).toBeInTheDocument();
  });

  test("Gender input is present", () => {
    render(<Details navigate={() => {}} setDetails={() => {}} />);
    const gender = screen.getByText(/Gender/i);
    expect(gender).toBeInTheDocument();
  });

  test("Language input is present", () => {
    render(<Details navigate={() => {}} setDetails={() => {}} />);
    const language = screen.getByText(/Language/i);
    expect(language).toBeInTheDocument();
  });

  test("Start Quiz button is present", () => {
    render(<Details navigate={() => {}} setDetails={() => {}} />);
    const startBtn = screen.getByRole("button");
    expect(startBtn).toBeInTheDocument();
  });

  test("Start Quiz button is disabled initially", () => {
    render(<Details navigate={() => {}} setDetails={() => {}} />);
    const startBtn = screen.getByRole("button");
    expect(startBtn).toBeDisabled();
  });
});
