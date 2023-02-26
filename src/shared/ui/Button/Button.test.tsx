import React from 'react';
import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('Button has been render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    
    test('Button has a class', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
