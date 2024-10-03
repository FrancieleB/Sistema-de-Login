import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './index'; 
import useAuth from '../../hooks/useAuth';

jest.mock('../../hooks/useAuth');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Home Component', () => {
  it('deve renderizar o título e o botão corretamente', () => {
    // Mock da função signout
    useAuth.mockReturnValue({
      signout: jest.fn(),
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Verifica se o título foi renderizado corretamente
    const titleElement = screen.getByText('Acesso realizado com sucesso');
    expect(titleElement).toBeInTheDocument();

    // Verifica se o botão "Sair" foi renderizado corretamente
    const buttonElement = screen.getByText('Sair');
    expect(buttonElement).toBeInTheDocument();
  });

  it('deve chamar signout e navegar para "/" quando o botão "Sair" for clicado', () => {
    const signoutMock = jest.fn();
    const navigateMock = jest.fn();

    // Mock da função signout e useNavigate
    useAuth.mockReturnValue({
      signout: signoutMock,
    });
    require('react-router-dom').useNavigate.mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const buttonElement = screen.getByText('Sair');
    fireEvent.click(buttonElement);

    // Verifica se a função signout foi chamada
    expect(signoutMock).toHaveBeenCalledTimes(1);

    // Verifica se a navegação foi realizada para "/"
    expect(navigateMock).toHaveBeenCalledWith('/');
  });
});

