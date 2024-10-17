import { useNavigate } from 'react-router-dom';
import ProfileStyled from './ProfileStyled';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';
import { doGet } from '../../service/api';
import { CircularProgress } from '@mui/material';

const Profile = () => {
  const [user, setUser] = useState<any>([]);
  const navigate = useNavigate();
  const userLocal = JSON.parse(localStorage.getItem('userLogged') || '{}');
  const [loading, setLoading] = useState<boolean>(true);
  const [showAvatar, setShowAvatar] = useState<boolean>(false);

  async function getUser() {
    setLoading(true);
    const response = await doGet(`/users/${userLocal.id}`, userLocal.token);

    if (response.success) {
      response.data.id = response.data.id.replace(/[^0-9\.]+/g, '');
      setUser(response.data);
      setShowAvatar(true);
    }
    setLoading(false);
    return;
  }

  function logout() {
    localStorage.removeItem('userLogged');
    navigate('/login');
  }

  useEffect(() => {
    if (userLocal.token) {
      getUser();
    }
  }, []);

  return (
    <ProfileStyled>
      {loading ? (
        <div className="loadingBtn">
          <CircularProgress />
        </div>
      ) : (
        <div className="img-name">
          <Avatar src="/" />
          <div>
            <p>
              {user.name}
              <span>@{user.username}</span>
            </p>
          </div>
        </div>
      )}
      <button onClick={logout}>Sair</button>
    </ProfileStyled>
  );
};

export default Profile;
