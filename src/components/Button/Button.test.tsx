import {it, describe, beforeEach, afterEach, expect} from "vitest";
import {fireEvent, render} from '@testing-library/react';
import {Button} from "./Button.js"

describe('Button component', () => {
  let component: object;
  let testText: string = "Test Text";

  it('Componen works', () => {
    const {getByTestId} = render(<Button text={testText}></Button>)
    component = getByTestId('qa-button');
    expect(component).not.toBeNull();
    //@ts-ignore
    expect(component.classList.contains('c-button')).toBe(true);
    //@ts-ignore
    expect(component.textContent).toEqual(testText)
    // const {getByTestId, unmount} = render(<Button text="Test Text"></Button>)
    const handleClick = jest.fn()
    //@ts-ignore
    fireEvent.click(component)
    //expect(handleClick).toHaveBeenCalledOnce()
  })
});