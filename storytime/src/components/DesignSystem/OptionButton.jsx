import { styled } from '@mui/system';
import { Button } from '@mui/material';

const StyledButton = styled(Button)({
    color: 'darkslategray',
    backgroundColor: '#757575',
  padding: 8,
  marginLeft: 8,
  marginRight: 8,
  borderRadius: '25px',
  transition:'0.4s',
  "&:hover": {
    backgroundColor: '#fff',
    color: 'black',
    transform: 'Scale(1.2)',
  }
});

export default StyledButton