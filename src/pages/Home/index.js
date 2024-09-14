import React from 'react'
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import useAuth from '../../hooks/useAuth';


const Home = () => {

  const { signout } = useAuth();
  const navigate = useNavigate();
  
 
  return (
    
    <C.Container>
      <C.Title>Acesso realizado com sucesso</C.Title>
      <Button Text="Sair" onClick={() =>[signout(), navigate("/")]}>
          Sair 
        </Button>
          
    </C.Container>

  )
}

export default Home;