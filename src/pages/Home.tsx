import { Link } from 'react-router-dom';
import ToolInspection from './dashboard/ToolInspection';

const Home = () => {
  return (
    <div>
      <h1>Home Page (Public)</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/dashboard">Go to Dashboard (Private)</Link>

      <ToolInspection />
    </div>
  );
};

export default Home;
