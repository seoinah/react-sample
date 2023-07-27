import { useEffect } from 'react';

const useClickOutside = (ref: any, callback: (e?: any) => void) => {
  const handleClick = (e: any) => {

    if (ref.current && !ref.current.contains(e.target)) {
      callback(e);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
export default useClickOutside;
