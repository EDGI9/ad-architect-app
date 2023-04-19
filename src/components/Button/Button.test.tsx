import {it, describe, expect, vi} from "vitest";
import {fireEvent, render, cleanup} from '@testing-library/react';
import {Button} from "./Button.js"
import {ButtonDTO} from "../../integration/core/dtos/Button.dto";

describe('Button component', () => {
  let component: RenderResult;
  let button: HTMLElement;
 
  const props: ButtonDTO = {
    text: "Test Text",
    type: "primary",
    round: true,
    small: true,
    active:true,
    className: "test-class",
  }

  beforeAll(() => {
    component = render(<Button />);
  });

  it('Componen renders properly', () => {
    component.rerender(<Button {...props}></Button>)
    button = component.getByTestId('qa-button');

    expect(button).toBeTruthy();
    //@ts-ignore
    expect(button.classList.contains('c-button')).toBeTruthy();
    //@ts-ignore
    expect(button.classList.contains('c-button--primary')).toBeTruthy();
    //@ts-ignore
    expect(button.classList.contains('c-button--active')).toBeTruthy();
    //@ts-ignore
    expect(button.classList.contains(props.className)).toBeTruthy();
    //@ts-ignore
    expect(button.textContent).toEqual(props.text)
  })

  it('Component handles user events', () => {
        
    const handleClick = vi.fn((): void => {})

    component.rerender(<Button {...props} onClick={handleClick}></Button>)
    button = component.getByTestId('qa-button');

    expect(button).toBeTruthy();
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledOnce();
  });

  afterAll(() => {
    component.unmount();
    cleanup();
  });
});