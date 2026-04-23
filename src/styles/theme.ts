// styles/theme.ts
export const theme = {
  colors: {
    bg: '#f0f4f8',
    surface: '#ffffff',
    surfaceHover: '#f8fafc',
    border: '#e2e8f0',
    borderLight: '#f1f5f9',
    text: '#0f172a',
    textSecondary: '#475569',
    textMuted: '#94a3b8',
    primary: '#3b82f6',
    primaryLight: '#eef2ff',
    primaryGlow: 'rgba(59, 130, 246, 0.2)',
    primaryGradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    secondary: '#64748b',
    danger: '#ef4444',
    dangerLight: '#fef2f2',
    success: '#22c55e',
    warning: '#f59e0b',
    priorityLow: '#22c55e',
    priorityMedium: '#f59e0b',
    priorityHigh: '#ef4444',
    glassBg: 'rgba(255, 255, 255, 0.85)',
    glassBorder: 'rgba(59, 130, 246, 0.15)',
  },
  blur: {
    sm: 'blur(4px)',
    md: 'blur(8px)',
    lg: 'blur(12px)',
  },
  shadows: {
    card: '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05)',
    glow: '0 0 20px rgba(59, 130, 246, 0.3)',
    surface: '0 2px 8px rgba(0, 0, 0, 0.06)',
    modal: '0 20px 40px rgba(0, 0, 0, 0.12)',
  },
  animations: {
    fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    full: '9999px',
  },
};

export type Theme = typeof theme;