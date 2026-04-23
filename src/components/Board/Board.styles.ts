import styled from 'styled-components';

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bg};
  background-image: radial-gradient(
    circle at 10% 20%,
    rgba(59, 130, 246, 0.03) 0%,
    rgba(0, 0, 0, 0.02) 90%
  );
  position: relative;
`;

export const BoardHeader = styled.header`
  background: ${({ theme }) => theme.colors.glassBg};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};
  padding: 20px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: ${({ theme }) => theme.shadows.surface};

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const BoardTitle = styled.h1`
  font-size: 26px;
  font-weight: 800;
  background: ${({ theme }) => theme.colors.primaryGradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::after {
    content: '';
    font-size: 22px;
    background: none;
    -webkit-background-clip: unset;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AddColumnButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primaryGradient};
  border: none;
  font-size: 26px;
  font-weight: 400;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.animations.normal};
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);

  &:hover {
    transform: scale(1.08) rotate(90deg);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
  }
  
  &:active {
    transform: scale(0.96) rotate(90deg);
  }
`;

export const ColumnsContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 32px;
  overflow-x: auto;
  align-items: flex-start;
  flex: 1;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.borderLight};
    border-radius: ${({ theme }) => theme.radii.full};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radii.full};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 16px;
    overflow-x: unset;
    gap: 16px;
  }
`;