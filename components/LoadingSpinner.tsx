
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
        <div className="flex justify-center items-center space-x-2">
            <div className="w-5 h-5 rounded-full bg-[#FF7E5F] animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-5 h-5 rounded-full bg-[#FEB47B] animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-5 h-5 rounded-full bg-[#FFD700] animate-bounce"></div>
        </div>
        <p className="font-fredoka text-2xl text-gray-600">Drawing something up...</p>
    </div>
  );
};

export default LoadingSpinner;
