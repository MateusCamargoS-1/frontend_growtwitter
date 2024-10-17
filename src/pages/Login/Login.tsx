import { CircularProgress, TextField } from '@mui/material';
import GlobalStyled from '../../config/GlobalStyled';
import LoginStyled from './LoginStyled';
import ButtonDefault from '../../components/ButtonDefault/ButtonDefault';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { doPost } from '../../service/api';

const Login = () => {
  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [loading, setLoading] = useState<Boolean>(false);
  const [passIncorrect, setPassIncorrect] = useState<Boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email || !password) {
      toast.error('Por favor! preencha todos os campos.', {
        position: 'top-center',
        autoClose: 5000,
      });
      return;
    }

    setLoading(true);

    const response = await doPost('/auth', { email, password }, '');
    
    setLoading(false);
  
    if (response.success) {
      const dataLogin = {
        email,
        token: response.data.user.token,
        id: response.data.user.id,
      };

      localStorage.setItem('userLogged', JSON.stringify(dataLogin));

      navigate('/');
    } else {
      toast.error('Email e/ou senha incorretos.', {
        position: 'top-center',
        autoClose: 2000,
      });
      setPassIncorrect(true);
    }
  };

  const redefinirSenha = () => {
    alert('Funcionalidade em desenvolvimento');
  }

  return (
    <LoginStyled>
      <GlobalStyled />
      <ToastContainer />
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
            <h1>Entrar no Growtwitter</h1>
            <form>
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
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
              <div className='loadingBtn'>
                <CircularProgress />
              </div>
            ) : (
              <ButtonDefault label="Entrar" onClick={handleSubmit} borderRadius="10px" width="100%" margin="20px 0" />
            )}
            {
              passIncorrect ? (
                <p className='passIncorrect'>
                  <button onClick={redefinirSenha}>Esqueceu a Senha?</button>
                </p>
              ) : (``)
            }
          </div>
          <p className="singUp">
            Não tem uma conta? <Link to={'/signup'}>Criar conta.</Link>
          </p>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
