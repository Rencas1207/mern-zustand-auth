import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

const ProfilePage = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  return (
    <div>
      ProfilePage
      <button
        type="button"
        onClick={() => {
          logout();
          navigate('/login');
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
