import {it, describe, beforeEach, afterEach, expect} from "vitest";
import {fireEvent, render} from '@testing-library/react';
import {Title} from "./Title.js"

describe('Title component', () => {
  let component: object;
  let testText: string = "Test Text";
  let testType: string = "h1";

  beforeEach( () => {
    const {getByTestId} = render(<Title type={testType} text={testText}></Title>)
    component = getByTestId('qa-title');
  })

  it('Renders component', () => {
    expect(component).not.toBeNull();
  })
  it('Has Title class', () => {
    expect(component.classList.contains('c-title')).toBe(true);
  })
  it('Receives header type and renders it', () => {
    expect(component.nodeName).toEqual(testType.toUpperCase())
  })
  it('Receives text and renders it', () => {
    expect(component.textContent).toEqual(testText)
  })
});