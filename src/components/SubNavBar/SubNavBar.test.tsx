import {it, describe, expect, vi} from "vitest";
import { fireEvent, render, cleanup } from '@testing-library/react';
import {SubNavBar} from "./SubNavBar.js"
import {RenovationPaths} from "../../router/renovations-paths.js";
import {Components} from "../../interfaces/Components.d";


describe('SubNavBar component', () => {
    let component: object;
    const handleClick = vi.fn((): void => {})
    const props: Components.SubNavBar = {
        items: RenovationPaths,
        onClick: handleClick,
    };

    afterAll(() => {
        cleanup();
    });

    it('Component works', async () => {
        const {getByTestId, getByText, getAllByRole} = render(<SubNavBar {...props} />);
        component = getByTestId('qa-sub-nav-bar');

        expect(component).not.toBeNull();
        //@ts-ignore
        expect(component.classList.contains('c-sub-nav-bar'));
        Object.entries(props.items).map(([key, item]) => {
            expect(getByText(item.text).textContent).toBe(props.items[key].text)
        })

        //@ts-ignore
        await fireEvent.click(getAllByRole('button')[0])
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
});