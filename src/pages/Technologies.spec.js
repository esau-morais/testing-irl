import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Technologies from 'pages/Technologies';

describe('pages/Technologies.js', () => {
  it("should be able to add new technology", () => {
    render(<Technologies />);

    const input = screen.getByTestId("input-add-tech");
    const form = screen.getByTestId("form-add-tech");

    userEvent.type(input, "React Native");
    fireEvent.submit(form);

    expect(screen.getByTestId("React Native")).toBeTruthy();
  });

  it("should be able to list three techs", () => {

    const { getByTestId } = render(<Technologies />);

    const input = getByTestId("input-add-tech");
    const form = getByTestId("form-add-tech");

    fireEvent.change(input, { target: { value: "React Native" } });
    fireEvent.submit(form);

    fireEvent.change(input, { target: { value: "Flutter" } });
    fireEvent.submit(form);

    const techList = getByTestId("ul-techs");
    expect(techList.children.length).toBe(3);
  });

  it("should be able to delete one tech", () => {
    render(<Technologies />);

    const input = screen.getByTestId("input-add-tech");
    const form = screen.getByTestId("form-add-tech");

    userEvent.type(input, "React Native");
    fireEvent.submit(form);

    expect(screen.getByTestId("React Native")).toBeTruthy();

    const itemButton = screen.getByTestId("React Native-btn-delete");
    userEvent.click(itemButton);

    expect(screen.queryByTestId("React Native")).toBeNull();
  });

  it("delete button should be disabled only for React technology", () => {
    render(<Technologies />);

    const button = screen.getByTestId("React-btn-delete");
    expect(button).toBeDisabled();
  });
})