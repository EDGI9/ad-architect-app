import {it, describe, expect} from "vitest";
import { render, cleanup } from '@testing-library/react';
import {TextInput} from "./TextInput"
import {Components} from "../../interfaces/Components.d";

describe('TextInput component', () => {
  let component: object;
  const props: Components.TextInput = {
    text: "Test Text",
    type: "secondary",
    placeholder: "Test Placeholder",
  };

  afterAll(() => {
    cleanup();
  });

  //TODO: Add more tests to test type and placeholder props
  it('Component works', () => {
    const {getByTestId} = render(<TextInput {...props}/>);
    component = getByTestId('qa-text-input');

    expect(component).not.toBeNull();
    //@ts-ignore
    expect(component.classList.contains('c-text-input')).toBe(true); 
  })
});