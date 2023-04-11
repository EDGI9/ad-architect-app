import { it, describe } from 'vitest'
import { render, cleanup } from '@testing-library/react';
import {NavBar} from "./NavBar.js"
import {RouterPaths} from "../../router/router-paths";
import {Components} from "../../interfaces/Components.d";

describe('NavBar component', () => {
  let component: object;
  const props: Components.NavBar = {
    routes: RouterPaths
  };

  afterAll(() => {
    cleanup();
  });

  it.skip('Component works', () => {
      const {getByTestId, getByText} = render(<NavBar {...props}/>);
      component = getByTestId('qa-sub-nav-bar');

      expect(component).not.toBeNull();
      //@ts-ignore
      expect(component.classList.contains('c-sub-nav-bar'));
      Object.entries(RouterPaths).map(([routeKey, routeProperties]) => {
        //@ts-ignore
        expect(getByText(routeProperties.text).textContent).toBe(RouterPaths[routeKey].text)
      })
  })
})
