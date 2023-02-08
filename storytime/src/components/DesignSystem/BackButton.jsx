import { styled } from '@mui/system';
import { Button } from '@mui/material';

const StyledButton = styled(Button)({
  color: '#f5870cf2',
  backgroundColor: '#f5870c00',
  transform: 'Scale(1.2)',
  padding: 8,
  borderRadius: '25px',
  "&:hover": {
    backgroundColor: '#f5870cf2',
    color: '#fff',
    transform: 'Scale(1.2)',
  }
});

export default StyledButton