import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simulate logout
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <div>
      <h1>Dashboard (Private)</h1>
      <button onClick={handleLogout}>Logout</button>
      <br />
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Dashboard;
