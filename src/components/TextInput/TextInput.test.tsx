import {it, describe, beforeEach, afterEach, expect} from "vitest";
import {fireEvent, render} from '@testing-library/react';
import {TextInput} from "./TextInput"

describe('TextInput component', () => {
  let component: object;
  const testText: string = "Test Text"
  it('Component works', () => {
    const {getByTestId} = render(<TextInput text={testText}/>);
    component = getByTestId('qa-text-input');
    //@ts-ignore
    expect(component.classList.contains('c-text-input')).toBe(true); 
  })
});