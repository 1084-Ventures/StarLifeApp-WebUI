import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  padding: ${tokens.spacing.medium};
  border-radius: ${tokens.borderRadius.medium};
  background-color: ${props => props.primary ? tokens.colors.primary : tokens.colors.secondary};
  color: ${tokens.colors.white};
  border: none;
  cursor: pointer;
`;

export const Button: React.FC<ButtonProps> = ({ primary = false, children }) => {
  return (
    <StyledButton primary={primary}>
      {children}
    </StyledButton>
  );
};
