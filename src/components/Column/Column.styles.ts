import styled from 'styled-components';

export const ColumnWrapper = styled.div<{ $isDragOver?: boolean }>`
  background: ${({ $isDragOver, theme }) =>
    $isDragOver 
      ? theme.colors.primaryLight 
      : theme.colors.surface};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border-radius: ${({ theme }) => theme.radii.lg};
  width: 340px;
  min-width: 340px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 14px;
  border: 1px solid ${({ theme, $isDragOver }) =>
    $isDragOver ? theme.colors.primary : theme.colors.border};
  transition: all ${({ theme }) => theme.animations.normal};
  box-shadow: ${({ theme }) => theme.shadows.card};

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  @media (max-width: 600px) {
    width: 100%;
    min-width: unset;
  }
`;

export const ColumnHeader = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%);
    pointer-events: none;
  }
`;

export const CountBadge = styled.div`
  min-width: 28px;
  width: 28px;
  height: 28px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: rgba(0, 0, 0, 0.2);
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  flex-shrink: 0;
`;

export const ColumnTitleInput = styled.input`
  flex: 1;
  min-width: 0;
  background: rgba(255, 255, 255, 0.12);
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 6px 8px;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
`;

export const ColorPickerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const EditIconButton = styled.label`
  background: rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.animations.fast};
  font-size: 13px;
  flex-shrink: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.35);
    transform: scale(1.05);
  }
`;

export const ColorPicker = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
`;

export const DeleteColumnButton = styled.button`
  background: rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.animations.fast};
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 0;
  line-height: 1;
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.danger};
    transform: scale(1.05);
  }
`;

export const AddCardButton = styled.button<{ $color: string }>`
  background: ${({ theme }) => theme.colors.primaryLight};
  border: 1px dashed ${({ $color, theme }) => $color || theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ $color, theme }) => $color || theme.colors.primary};
  font-size: 13px;
  font-weight: 600;
  padding: 8px 12px;
  cursor: pointer;
  text-align: center;
  transition: all ${({ theme }) => theme.animations.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary}15;
    transform: translateY(-1px);
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 60px;
  max-height: calc(100vh - 260px);
  overflow-y: auto;
  padding: 2px;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.borderLight};
    border-radius: ${({ theme }) => theme.radii.full};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radii.full};
  }
`;