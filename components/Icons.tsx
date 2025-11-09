import React from 'react';

export const SparklesIcon: React.FC<{className?: string}> = ({ className = "h-8 w-8 text-[#FFD700]" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.25a.75.75 0 01.75.75v3.024a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM8.378 5.622a.75.75 0 011.06 0l2.122 2.121a.75.75 0 01-1.06 1.06L8.378 6.682a.75.75 0 010-1.06zM20.25 12a.75.75 0 01-.75.75H16.5a.75.75 0 010-1.5h3.024a.75.75 0 01.75.75zM16.502 16.502a.75.75 0 010 1.06l-2.121 2.121a.75.75 0 01-1.06-1.06l2.121-2.121a.75.75 0 011.06 0zM12 21.75a.75.75 0 01-.75-.75V18a.75.75 0 011.5 0v3.024a.75.75 0 01-.75.75zM6.682 15.622a.75.75 0 011.06 0l2.121-2.121a.75.75 0 111.06 1.06l-2.121 2.121a.75.75 0 01-1.06 0zM3.75 12a.75.75 0 01.75-.75h3.024a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75zM6.682 8.378a.75.75 0 010-1.06l2.121-2.122a.75.75 0 111.06 1.06L7.742 8.378a.75.75 0 01-1.06 0z" />
  </svg>
);

export const XCircleIcon: React.FC<{className?: string}> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const StarIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export const BookOpenIcon: React.FC<{className?: string}> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

export const ChevronDownIcon: React.FC<{className?: string}> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);