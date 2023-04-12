import "@testing-library/jest-dom"
import {it, describe, expect, vi} from "vitest";
import {render, fireEvent, cleanup} from '@testing-library/react';
import {Image} from "./Image.js"
import {Components} from "../../interfaces/Components.d";
import { images } from "../../__mock__/images";


describe('Image component', () => {
  let component: object;
  let img: object;
  const handleClick = vi.fn((): void => {})
  const props: Components.Image = {
    image: images.big_img_1,
    className: "test-class",
    imgClassName: "img-test-class",
    width: 100,
    height: 100,
    onClick: handleClick,
  };

  afterAll(() => {
    cleanup();
  });


  it('Component works', async () => {
    const {getByTestId, getByRole} = render(<Image {...props}></Image>)
    component = getByTestId('qa-image');
    img = getByRole('img');
    
    expect(component).not.toBeNull();
    //@ts-ignore
    expect(component.classList.contains('c-image')).toBe(true);;
    expect(img).toHaveAttribute('src', props.image.src);
    expect(img).toHaveAttribute('alt', props.image.name);
    
    //@ts-ignore
    expect(component.classList.contains(props.className)).toBe(true);
    //@ts-ignore
    expect(img.classList.contains(props.imgClassName)).toBe(true);

    expect(img).toHaveAttribute('width', `${props.width}px`);
    expect(img).toHaveAttribute('height', `${props.height}px`);
    

    //@ts-ignore
    await fireEvent.click(component)
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(props.image);
  })
});