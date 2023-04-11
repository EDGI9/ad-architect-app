import {it, describe, expect, vi} from "vitest";
import {fireEvent, render, cleanup} from '@testing-library/react';
import {Button} from "./Button.js"
import {Components} from "../../interfaces/Components.d";

describe('Button component', () => {
  let component: object;
  let testText: string = "Test Text";
  const handleClick = vi.fn((): void => {})
  const props: Components.Button = {
    text: "Test Text",
    type: "primary",
    round: true,
    small: true,
    className: "test-class",
    onClick: handleClick,
  }

  afterAll(() => {
    cleanup();
  });

  it('Componen works', async () => {
    const {getByTestId} = render(<Button {...props}></Button>)
    component = getByTestId('qa-button');
    expect(component).not.toBeNull();
    //@ts-ignore
    expect(component.classList.contains('c-button')).toBe(true);
    //@ts-ignore
    expect(component.textContent).toEqual(testText)
    //@ts-ignore
    await fireEvent.click(component)
    expect(handleClick).toHaveBeenCalledTimes(1);
  })
});