import {it, describe, expect} from "vitest";
import {render} from '@testing-library/react';
import {Title} from "./Title"

describe('Title component', () => {
  let component: object;
  let testText: string = "Test Text";
  let testType: string = "h1";
  
  it('Component works', () => {
    const {getByTestId} = render(<Title type={testType} text={testText}></Title>)
    component = getByTestId('qa-title');
    expect(component).not.toBeNull();
    //@ts-ignore
    expect(component.classList.contains('c-title')).toBe(true);
    //@ts-ignore
    expect(component.nodeName).toEqual(testType.toUpperCase())
    //@ts-ignore
    expect(component.textContent).toEqual(testText)
  })
});