import {it, describe, expect} from "vitest";
import {render} from '@testing-library/react';
import {TextInput} from "./TextInput"

describe('TextInput component', () => {
  let component: object;
  const testText: string = "Test Text"
  it('Component works', () => {
    const {getByTestId} = render(<TextInput text={testText}/>);
    component = getByTestId('qa-text-input');

    expect(component).not.toBeNull();
    //@ts-ignore
    expect(component.classList.contains('c-text-input')).toBe(true); 
  })
});