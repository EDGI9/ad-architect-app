import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { TextInputDTO } from "../../integration/core/dtos/components/TextInput.dto";
import { TextInput } from "./TextInput";

describe('TextInput component', () => {
  let component: object;
  const props: TextInputDTO = {
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