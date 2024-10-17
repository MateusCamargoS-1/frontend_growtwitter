import { CircularProgress, TextField } from '@mui/material';
import GlobalStyled from '../../config/GlobalStyled';
import SignupStyled from './SignupStyled';
import ButtonDefault from '../../components/ButtonDefault/ButtonDefault';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { doPost } from '../../service/api';

const Signup = () => {
  const [name, setName] = useState<String>('');
  const [username, setUsername] = useState<String>('');
  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  async function handleCreateAccount() {
    if (!email || !password || !name || !username) {
      toast.error('Por favor! preencha todos os campos.', {
        position: 'top-center',
        autoClose: 5000,
      });
      return;
    }

    setLoading(true);
    const response = await doPost('/users', { email, password, name, username }, '');

    setLoading(false);
    if (response.success) {
      toast.success('Conta criada com sucesso!', {
        position: 'top-center',
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } else {
      toast.error('Email ou username indisponivel!', {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  }
  return (
    <SignupStyled>
      <ToastContainer />
      <GlobalStyled />
      <div className="card-container">
        <div className="content-info">
          <h1>Growtwitter</h1>
          <span>Trabalho para praticar</span>
          <p>
            O Growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que buscam uma
            experiência familiar e poderosa, semelhante ao Twitter, mas com um toque único. Seja parte desta comunidade
            que valoriza a liberdade de expressão, a conexão com pessoas de todo o mundo e a disseminação de ideias.
          </p>
        </div>
        <div className="content-form">
          <div className="container-form">
            <h1>Criar conta no Growtwitter</h1>
            <form>
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <TextField
                label="Username"
                variant="outlined"
                size="small"
                fullWidth
                margin="dense"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <TextField
                label="Email"
                type="email"
                size="small"
                fullWidth
                margin="dense"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                size="small"
                fullWidth
                margin="dense"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </form>

            {loading ? (
              <div className="loadingBtn">
                <CircularProgress />
              </div>
            ) : (
              <ButtonDefault
                label="Criar Conta"
                onClick={handleCreateAccount}
                borderRadius="10px"
                width="100%"
                margin="20px 0"
              />
            )}
          </div>
          <p className="login">
            Já tem uma conta? <Link to={'/login'}>Entrar.</Link>
          </p>
        </div>
      </div>
    </SignupStyled>
  );
};

export default Signup;
