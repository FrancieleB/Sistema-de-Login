import React, { useState } from 'react';
import Button from '../../components/Button'; // ajuste para usar o novo estilo se necessário
import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const { user, signout } = useAuth();
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleAddTask = () => {
        if (taskInput) {
            setTasks([...tasks, taskInput]);
            setTaskInput('');
        }
    };

    return (
        <C.Container>
            <C.Sidebar>
                {user ? (
                    <>
                        <C.UserEmail>{user.email}</C.UserEmail>
                        <C.NameContainer>
                            <C.UserName>{user.nome || ''}</C.UserName>
                            <C.UserName>{user.sobrenome || ''}</C.UserName>
                        </C.NameContainer>
                        <C.UserName>{user.dataNascimento || ''}</C.UserName>
                    </>
                ) : (
                    <C.UserName>Carregando...</C.UserName>
                )}
            </C.Sidebar>
            <C.Main>
                <C.Title>Bem-vindo à sua lista de tarefas!</C.Title>
                <C.ExitButtonContainer>
                    <Button Text="Sair" onClick={() => [signout(), navigate("/")]} />
                </C.ExitButtonContainer>

                {/* To-Do List Section */}
                <C.TodoContainer>
                    <C.TodoInput
                        type="text"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                        placeholder="Adicione uma nova tarefa"
                    />
                    <C.TodoButton onClick={handleAddTask}>Adicionar</C.TodoButton>
                    <C.TodoList>
                        {tasks.map((task, index) => (
                            <C.TodoItem key={index}>{task}</C.TodoItem>
                        ))}
                    </C.TodoList>
                </C.TodoContainer>
            </C.Main>
        </C.Container>
    );
};

export default Home;

