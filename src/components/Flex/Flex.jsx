import React from 'react';

const Flex = ({ children, justify, align, gap, style, flexDir = 'row',className }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: justify,
        alignItems: align,
        gap: gap,
        flexDirection: flexDir,
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Flex;
