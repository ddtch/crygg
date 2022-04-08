import React from 'react';

export type MainButtonProps = {
  title: string
}

const MainButton: React.FC<MainButtonProps> = ({title}: MainButtonProps) => {
  return (
    <div>{title}</div>
  );
}

export default MainButton;
