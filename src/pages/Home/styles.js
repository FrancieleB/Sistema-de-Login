import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #fce4ec;
`;

export const Sidebar = styled.div`
  width: 250px;
  background: #F5F5F5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserEmail = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
`;

export const UserName = styled.p`
  margin: 5px 10px; 
  font-size: 0.8em; 
  text-align: center; 
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: center; 
  width: 100%; 
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
`;

export const RemoveButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

export const ExitButtonContainer = styled.div`
  position: absolute;
  top: 20px; 
  right: 20px; 
`;
export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const TodoInput = styled.input`
  padding: 20px; 
  width: 300px; 
  margin-bottom: 10px; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
`;

export const TodoButton = styled.button`
  padding: 10px 12px; 
  border: none;
  border-radius: 5px;
  background-color: #9b59b6; 
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #8A2BE2; 
  }
`;

export const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
  width: 300px; 
`;

export const TodoItem = styled.li`
  background: #e2e2e2;
  margin: 5px 0;
  padding: 10px;
  border-radius: 10px;
`;

