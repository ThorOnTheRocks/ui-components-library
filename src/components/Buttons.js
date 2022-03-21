import styled from 'styled-components';
import { defaultTheme } from '../utils';
import { typeScale } from '../utils';
import { colors, red, neutral } from '../utils';


const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  min-width: 100px;
  border-radius: 6px;
  cursor: pointer;
  font-family: ${typeScale.primaryFont};
`

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: ${neutral[100]};
`;

const SecondaryButton = styled(Button)`
  border: 2px solid ${defaultTheme.primaryColor};
  background: none;
  color: ${defaultTheme.primaryColor};
`

const WarningButton = styled(Button)`
  background-color: ${red[100]};
  color: ${neutral[100]};
  border: none;

`

export {
  PrimaryButton,
  SecondaryButton,
  WarningButton
};