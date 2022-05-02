import React from 'react';
import { BtnWrapper } from './styles/TestWrapper';

export const Button = (props) => {
  const {
    label,
    disabled,
    handleClick,
    className,
    icon
  } = props;

  return (
    <BtnWrapper disabled={disabled}>
        <button type="button" onClick={() => handleClick()} disabled={disabled} className={className}>
          <span>{label}</span>
          {icon && <img src={icon} alt=""></img>}
        </button>
      
    </BtnWrapper>
  );
};
