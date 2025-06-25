'use client';
import React, { useState } from 'react';

const Button = ({
    children,
    type = 'btnType',
  bgColor = '#000',
  hoverBg = '#333', // Default hover background
  textColor = '#fff',
  hoverText = '#fff', // Default hover text color
  onClick,
  style = {},
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <button
        type='btnType'
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? hoverBg : bgColor,
        color: isHovered ? hoverText : textColor,
        padding: '10px 20px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
