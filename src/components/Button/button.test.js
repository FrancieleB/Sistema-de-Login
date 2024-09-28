import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index'; // Ajuste o caminho conforme necessário

describe('Button Component', () => {
  test('deve renderizar corretamente', () => {
    render(<Button Text="Clique aqui" />);

    const buttonElement = screen.getByText('Clique aqui');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'button'); // Verifica o tipo do botão
  });

  test('deve chamar a função onClick quando clicado', () => {
    const handleClick = jest.fn();
    render(<Button Text="Clique aqui" onClick={handleClick} />);

    const buttonElement = screen.getByText('Clique aqui');
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1); // Verifica se a função foi chamada
  });
});

