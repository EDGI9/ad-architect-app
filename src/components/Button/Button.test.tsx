import {it, describe, beforeEach, afterEach, expect} from "vitest";
import {fireEvent, render} from '@testing-library/react';
import {Button} from "./Button.js"

describe('Button component', () => {
  let component: object;
  let testText: string = "Test Text";

  beforeEach( () => {
    const {getByTestId} = render(<Button text={testText}></Button>)
    component = getByTestId('qa-button');
  })

  it('Renders component', () => {
    expect(component).not.toBeNull();
  })
  it('Has Button class', () => {
    expect(component.classList.contains('c-button')).toBe(true);
  })
  it('Receives text and renders it', () => {
    expect(component.textContent).toEqual(testText)
  })
  it('Fires click event', async () => {
    // const {getByTestId, unmount} = render(<Button text="Test Text"></Button>)
    const handleClick = jest.fn()
    fireEvent.click(component)
    //expect(handleClick).toHaveBeenCalledOnce()
  })
});