import {Images} from "../../interfaces/Image.d";
import {it, describe, expect} from "vitest";
import {render} from '@testing-library/react';
import {Image} from "./Image.js"
import { images } from "../../__mock__/images";

describe('Image component', () => {
  let component: object;
  let source: object;
  let img: object;
  let testImageSrc: Images.Image = images.big_img_1;
  let width: number = 100;
  let height: number = 100;

  it('Component works', () => {
    const {getByTestId, container} = render(<Image image={testImageSrc} width={width} height={height}></Image>)
    component = getByTestId('qa-image');
    expect(component).not.toBeNull();
    /* console.log(container);
    expect(container).toContainElement('source')
    expect(container).toContainElement('img') */

  })
});