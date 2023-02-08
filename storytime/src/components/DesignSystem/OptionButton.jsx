import { styled } from '@mui/system';
import { Button } from '@mui/material';

const StyledButton = styled(Button)({
    color: '#f5870cf2',
    backgroundColor: '#f5870c00',
    border: '5px solid #f5870cf2',
    fontWeight: 600,
    padding: 16,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: '15px',
    transition: '0.4s',
    "&:hover": {
        backgroundColor: '#f5870cf2',
        color: '#fff',
        transform: 'Scale(1.2)',
    }
});

export default StyledButton