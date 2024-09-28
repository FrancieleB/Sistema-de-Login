import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './index'; // Certifique-se de que o caminho está correto
import '@testing-library/jest-dom/extend-expect'; // Para usar toBeInTheDocument

describe('Input Component', () => {
  it('deve renderizar corretamente', () => {
    render(<Input type="text" placeholder="Digite algo" value="" onChange={() => {}} />);
    
    const inputElement = screen.getByPlaceholderText('Digite algo');
    expect(inputElement).toBeInTheDocument(); // Verifica se o input está no documento
  });
});


