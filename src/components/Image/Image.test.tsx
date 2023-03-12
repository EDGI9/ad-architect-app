import {it, describe, expect} from "vitest";
import {render} from '@testing-library/react';
import {Image} from "./Image.js"

describe('Image component', () => {
  let component: object;
  let source: object;
  let img: object;
  let testImageSrc: string = "testImage.jpg";
  let width: number = 100;
  let height: number = 100;

  it('Component works', () => {
    const {getByTestId, container} = render(<Image src={testImageSrc} width={width} height={height}></Image>)
    component = getByTestId('qa-image');
    expect(component).not.toBeNull();
    //@ts-ignore
    expect(component.classList.contains('c-image')).toBe(true);
    /* console.log(container);
    expect(container).toContainElement('source')
    expect(container).toContainElement('img') */

  })
});