import { it, describe } from 'vitest'
import {render} from '@testing-library/react';
import {NavBar} from "./NavBar.js"
import {RouterPaths} from "../../router/router-paths";


describe('NavBar component', () => {
  let component: object;
  const testItems: Array<string> = ['Item 1', 'Item 2', 'Item 3'];

  it.skip('Component works', () => {
      const {getByTestId, getByText} = render(<NavBar routes={RouterPaths} />);
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
