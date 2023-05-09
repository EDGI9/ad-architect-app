import { it, describe, expect } from "vitest";
import { render, cleanup } from '@testing-library/react';
import { Title } from "./Title";

describe('Title component', () => {
  let component: object;
  const props = {
    type: 'h1',
    text: 'Test Text',
  };

  afterAll(() => {
    cleanup();
  });
  
  it('Component works', () => {
    const {getByTestId} = render(<Title {...props}></Title>)
    component = getByTestId('qa-title');
    
    expect(component).not.toBeNull();
    //@ts-ignore
    expect(component.classList.contains('c-title')).toBe(true);
    //@ts-ignore
    expect(component.nodeName).toEqual(props.type.toUpperCase())
    //@ts-ignore
    expect(component.textContent).toEqual(props.text)
  })
});