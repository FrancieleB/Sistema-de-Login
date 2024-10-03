import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../../firebase';

const Signup = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [emailConf, setEmailConf] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!nome || !sobrenome || !dataNascimento || !email || !senha) {
      setError('Preencha todos os campos');
      return;
    } else if (email !== emailConf) {
      setError('Os e-mails não são iguais');
      return;
    }

    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, senha);
      const user = userCredential.user;

      // Atualiza o displayName do usuário
      await user.updateProfile({
        displayName: `${nome} ${sobrenome}`
      });

      // Salva os dados do usuário no Firestore
      await firebase.firestore().collection('users').doc(user.uid).set({
        nome,
        sobrenome,
        dataNascimento,
        email,
      });

      alert('Usuário cadastrado com sucesso!');
      navigate('/'); // Redireciona para a página inicial ou de login
    } catch (error) {
      setError('Erro ao cadastrar: ' + error.message);
    }
  };

  return (
    <C.Container>
      <C.Label>Cadastro</C.Label>
      <C.Content>
        <Input
          type="text"
          placeholder="Digite seu Nome"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setError('')]}
        />
        <Input
          type="text"
          placeholder="Digite seu Sobrenome"
          value={sobrenome}
          onChange={(e) => [setSobrenome(e.target.value), setError('')]}
        />
        <Input
          type="date"
          placeholder="Data de Nascimento"
          value={dataNascimento}
          onChange={(e) => [setDataNascimento(e.target.value), setError('')]}
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError('')]}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError('')]}
        />
        {error && <C.LabelError>{error}</C.LabelError>}
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignup>
          Já tem uma conta?
          <C.Strong>
            <Link to="/signin"> Entre</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
