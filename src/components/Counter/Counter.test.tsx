import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { Counter } from "./Counter.js";

describe('Counter component', () => {
  let component: object;
  const props = {
    number: 1,
    type: "primary",
    className: "test-class",
  }
  const expectedString = `${(props.number < 10 ? '0' : '') + props.number}.`

  afterAll(() => {
    cleanup();
  });

  it('Componen works', async () => {
    const {getByTestId} = render(<Counter {...props}></Counter>)
    component = getByTestId('qa-counter');
    expect(component).not.toBeNull();
    //@ts-ignore
    expect(component.classList.contains('c-counter')).toBe(true);
    //@ts-ignore
    expect(component.classList.contains('c-counter--primary')).toBe(true);
    //@ts-ignore
    expect(component.classList.contains(props.className)).toBe(true);
    //@ts-ignore
    expect(component.textContent).toEqual(expectedString)
  })
});