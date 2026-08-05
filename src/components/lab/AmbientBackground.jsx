import React from 'react';

const AmbientBackground = () => {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Faint drifting grid */}
      <div className="absolute inset-[-10%] bg-grid-fixed animate-grid-scroll opacity-60" />

      {/* Drifting aurora glows */}
      <div className="absolute -top-1/4 -left-1/5 w-[75vw] h-[75vw] rounded-full blur-3xl animate-aurora-1 bg-[radial-gradient(circle,rgba(52,229,160,0.11),transparent_62%)]" />
      <div className="absolute top-1/4 -right-1/5 w-[65vw] h-[65vw] rounded-full blur-3xl animate-aurora-2 bg-[radial-gradient(circle,rgba(150,218,190,0.08),transparent_62%)]" />
      <div className="absolute bottom-[-15%] left-1/4 w-[60vw] h-[60vw] rounded-full blur-3xl animate-aurora-3 bg-[radial-gradient(circle,rgba(212,31,38,0.05),transparent_62%)]" />

      {/* Vignette to keep edges deep and text legible */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(2,6,4,0.55))]" />
    </div>
  );
};

export default AmbientBackground;
