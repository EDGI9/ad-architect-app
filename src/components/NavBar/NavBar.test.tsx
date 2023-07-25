import { it, describe } from 'vitest'
import { render, cleanup } from '@testing-library/react';
import { RouterPaths } from "../../router/RouterPaths";
import { NavBar } from "./NavBar.js";

describe('NavBar component', () => {
  let component: object;
  const props = {
    routes: RouterPaths
  };

  afterAll(() => {
    cleanup();
  });

  it('Component works', () => {
      const {getByTestId, getByText} = render(<NavBar {...props}/>);
      component = getByTestId('qa-nav-bar');

      expect(component).not.toBeNull();
      //@ts-ignore
      expect(component.classList.contains('c-nav-bar')).toBe(true);
      Object.entries(RouterPaths).map(([routeKey, routeProperties]) => {
        //@ts-ignore
        expect(getByText(routeProperties.text).textContent.trim()).toBe(RouterPaths[routeKey].text)
      })
  })
})
