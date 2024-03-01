import styled from '@emotion/styled';
import { Button, alpha } from '@mui/material';

export const OptionsButton = styled(Button)(() => ({
  color: 'rgb(92, 204, 157)',
  border: '1px solid rgb(92, 204, 157)',
  marginRight: 10,
  marginBottom: 10,
  '&:hover': {
    border: '1px solid rgb(66 166 124)',
    backgroundColor: alpha('rgb(92, 204, 157)', 0.1),
    color: 'rgb(81 187 143)',
  },
}));
