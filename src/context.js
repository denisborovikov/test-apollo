import React from 'react';

export const AppCtx = React.createContext(null);

export function useAppCtx() {
  const context = React.useContext(AppCtx);
  if (!context) {
    throw new Error(
      'useAppCtx must be used within a useAppCtx.Provider'
    );
  }
  return context;
}