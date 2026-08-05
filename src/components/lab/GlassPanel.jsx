import React from 'react';

const GlassPanel = ({ as: Tag = 'div', className = '', glow = true, children, ...rest }) => {
  return (
    <Tag
      className={`relative bg-surface-solid/70 backdrop-blur-xl border border-primary/15 shadow-[0_8px_40px_rgba(0,0,0,0.45)] ${
        glow ? 'lab-panel-glow' : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default GlassPanel;
