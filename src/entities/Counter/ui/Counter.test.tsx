import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import {Counter} from "./Counter";
import {userEvent} from "@storybook/testing-library";

describe('Counter', () => {
    test('Should be in the document', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10
                }
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('Should increment counter', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10
                }
            },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('Should decrement counter', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10
                }
            },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
