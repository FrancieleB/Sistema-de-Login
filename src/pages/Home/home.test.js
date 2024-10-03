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
    // Mock da função signout e do usuário
    useAuth.mockReturnValue({
      user: { email: 'teste@exemplo.com', nome: 'Nome', sobrenome: 'Sobrenome', dataNascimento: '01/01/2000' },
      signout: jest.fn(),
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Verifica se o título foi renderizado corretamente
    const titleElement = screen.getByText('Bem-vindo à sua lista de tarefas!');
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
      user: { email: 'teste@exemplo.com', nome: 'Nome', sobrenome: 'Sobrenome', dataNascimento: '01/01/2000' },
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

  it('deve adicionar uma nova tarefa quando o botão "Adicionar" for clicado', () => {
    useAuth.mockReturnValue({
      user: { email: 'teste@exemplo.com', nome: 'Nome', sobrenome: 'Sobrenome', dataNascimento: '01/01/2000' },
      signout: jest.fn(),
    });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const inputElement = screen.getByPlaceholderText('Adicione uma nova tarefa');
    const addButton = screen.getByText('Adicionar');

    fireEvent.change(inputElement, { target: { value: 'Nova Tarefa' } });
    fireEvent.click(addButton);

    const taskElement = screen.getByText('Nova Tarefa');
    expect(taskElement).toBeInTheDocument();
  });
});
