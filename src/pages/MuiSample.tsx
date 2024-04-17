import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const MuiSample = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>This is Mui Sample Page</h1>
      <Button variant="contained" onClick={() => navigate(-1)}>
        Go Back
      </Button>
      <button>
        <Link to="/dashboard">Go Dashboard</Link>
      </button>
    </>
  );
};

export default MuiSample;
