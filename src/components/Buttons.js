import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: ({ theme }) => `
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};
    
    &:hover, &:focus {
      background-color: ${theme.status.warningColorHover};
      outline: 3px solid ${theme.status.warningColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${theme.status.warningColorActive};
    }
  `,
  error: ({ theme }) => `
  background-color: ${theme.status.errorColor};
  color: ${theme.textColorInverted};

  &:hover {
    background-color: ${theme.status.errorColorHover};
  }

  &:active {
    background-color: ${theme.status.errorColorActive};
  }
  `,
  success: ({ theme }) => `
  background-color: ${theme.status.successColor};
  color: ${theme.textColorInverted};

  &:hover {
    background-color: ${theme.status.successColorHover};
  }

  &:active {
    background-color: ${theme.status.successColorActive};
  }
  `
};

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHoverColor};
    color: ${({ theme }) => theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${({ theme }) => theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${({ theme }) => theme.primaryActiveColor};
    border-color: ${({ theme }) => theme.primaryActiveColor};
    color: ${({ theme }) => theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  border: 2px solid transparent;
  color: ${({ theme }) => theme.textColorOnPrimary};

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
    color: ${({ theme }) => theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.primaryColor};
  background: none;

  &:disabled {
    background: none;
    border: 2px solid ${({ theme }) => theme.disabled};
    color: ${({ theme }) => theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${({ theme }) => theme.primaryColor};
  background: none;

  &:disabled {
    color: ${({ theme }) => theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;