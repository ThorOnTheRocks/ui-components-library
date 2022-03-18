import styled from 'styled-components'

const primaryColor = '#F78F28';
const warningColor = '#D0454C';


const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  min-width: 100px;
  border-radius: 6px;
  cursor: pointer;
`

const PrimaryButton = styled(Button)`
  background-color: ${primaryColor};
  border: none;
  color: white;
`;

const SecondaryButton = styled(Button)`
  border: 2px solid ${primaryColor};
  background: none;
  color: ${primaryColor};
`

const WarningButton = styled(Button)`
  background-color: ${warningColor};
  color: white;
  border: none;

`

export {
  PrimaryButton,
  SecondaryButton,
  WarningButton
};