
import React from 'react';

interface CtaButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, onClick, disabled = false, type = 'submit' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="font-fredoka text-lg text-black bg-gradient-to-br from-[#FFD700] to-[#FFA500] py-3 px-8 rounded-xl border-4 border-black transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none shadow-[4px_4px_0px_#1F2937] hover:shadow-[6px_6px_0px_#1F2937] active:shadow-[2px_2px_0px_#1F2937]"
    >
      {children}
    </button>
  );
};

export default CtaButton;
