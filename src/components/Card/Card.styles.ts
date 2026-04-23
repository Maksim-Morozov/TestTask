import styled from 'styled-components';
import { Priority } from '../../store/slices/boardSlice';

const priorityColor: Record<Priority, string> = {
  low: '#22c55e',
  medium: '#f59e0b',
  high: '#ef4444',
};

const priorityBg: Record<Priority, string> = {
  low: '#f0fdf4',
  medium: '#fffbeb',
  high: '#fef2f2',
};

export const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: grab;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.animations.normal};
  box-shadow: ${({ theme }) => theme.shadows.card};

  &:hover {
    transform: translateX(4px) translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.15);
  }
  
  &:active {
    cursor: grabbing;
  }
`;

export const PriorityBadge = styled.span<{ priority: Priority }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  color: ${({ priority }) => priorityColor[priority]};
  background: ${({ priority }) => priorityBg[priority]};
  width: fit-content;
  
  &::before {
    content: '●';
    font-size: 8px;
  }
`;

export const CardTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  word-break: break-word;
  line-height: 1.4;
`;

export const CardDescription = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  word-break: break-word;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.animations.fast};

  ${CardWrapper}:hover & {
    opacity: 1;
  }
`;

export const IconButton = styled.button`
  background: ${({ theme }) => theme.colors.surfaceHover};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all ${({ theme }) => theme.animations.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.05);
  }
`;