import React from 'react';

interface Props {
    children: JSX.Element
}

export function StepContent({ children }: Props):JSX.Element {
  return (
    <div className="content-step">
      {children}
    </div>
  );
}
