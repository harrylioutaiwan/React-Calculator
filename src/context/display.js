import { createContext, useContext } from 'react';

export const displayContext = createContext();

export function useDisplay() {
  return useContext(displayContext);
}
