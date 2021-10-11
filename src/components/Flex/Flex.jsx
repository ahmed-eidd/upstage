import React from 'react';

const Flex = ({ children, justify, align, gap, style }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: justify,
        alignItems: align,
        gap: gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
