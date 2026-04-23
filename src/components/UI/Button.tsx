import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'danger';
  size?: 'sm' | 'md';
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 14px;
  font-weight: 600;
  transition: all ${({ theme }) => theme.animations.fast};
  cursor: pointer;
  border: none;

  ${({ size = 'md' }) =>
    size === 'sm'
      ? css`padding: 5px 12px; font-size: 13px;`
      : css`padding: 9px 20px;`}

  ${({ variant = 'primary', theme }) => {
    if (variant === 'primary')
      return css`
        background: ${theme.colors.primaryGradient};
        color: white;
        box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
        
        &:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.4);
        }
      `;
    if (variant === 'ghost')
      return css`
        background: ${theme.colors.surface};
        border: 1px solid ${theme.colors.border};
        color: ${theme.colors.textSecondary};
        
        &:hover {
          background: ${theme.colors.primaryLight};
          border-color: ${theme.colors.primary};
          color: ${theme.colors.primary};
        }
      `;
    if (variant === 'danger')
      return css`
        background: transparent;
        border: 1px solid ${theme.colors.danger};
        color: ${theme.colors.danger};
        
        &:hover {
          background: ${theme.colors.dangerLight};
        }
      `;
  }}
  
  &:active {
    transform: translateY(0);
  }
`;