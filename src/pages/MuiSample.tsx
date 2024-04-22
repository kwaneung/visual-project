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
      <br />
      <br />
      <Button variant="contained" href="/dashboard">
        Go Dashboard
      </Button>
    </>
  );
};

export default MuiSample;
