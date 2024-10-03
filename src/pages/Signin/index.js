import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../../firebase';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !senha) {
      setError('Preencha todos os campos');
      return;
    }
    console.log("Tentando fazer login...");
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(() => {
        console.log("Login bem-sucedido!");
        navigate('/home');
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error.message);
        setError('Erro ao fazer login: ' + error.message);
      });
  };

  return (
    <C.Container>
      <C.Label>LOGIN</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError('')]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSigin>
          Não tem conta?
          <C.Strong>
            <Link to="/signup">  Registre-se</Link>
          </C.Strong>
        </C.LabelSigin>
      </C.Content>
    </C.Container>
  );
};

export default Signin;

