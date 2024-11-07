import React from "react";
import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "../Counter";

describe("test Conter Components",()=>{
    test("header test should be rendered",()=>{
        render(<Counter/>);
    
        expect(screen.getByText('Counter')).toBeInTheDocument();

        expect(screen.getByText('0')).toBeInTheDocument();
    })
    test('increments the counter when Add button is clicked', () => {
        render(<Counter />);

        fireEvent.click(screen.getByText('Add'));
    
        expect(screen.getByText('1')).toBeInTheDocument();
      });
    
      test('decrements the counter when Minus button is clicked', () => {
        render(<Counter />);
    
        fireEvent.click(screen.getByText('Minus'));
    
        expect(screen.getByText('-1')).toBeInTheDocument();
      });
})