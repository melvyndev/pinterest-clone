import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

type ProviderProps = {
  children: ReactNode;
};

function Provider({ children }: ProviderProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}

export default Provider;
