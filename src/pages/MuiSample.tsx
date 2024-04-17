import { Link, useNavigate } from 'react-router-dom';

const MuiSample = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>This is Mui Sample Page</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default MuiSample;
