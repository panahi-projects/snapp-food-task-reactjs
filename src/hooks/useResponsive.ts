import { useEffect, useState } from 'react';
import { Breakpoint } from '@interfaces/index';

function useResponsive(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(getCurrentBreakpoint());

  useEffect(() => {
    function handleResize() {
      const newBreakpoint = getCurrentBreakpoint();
      if (newBreakpoint !== breakpoint) {
        setBreakpoint(newBreakpoint);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return breakpoint;
}

function getCurrentBreakpoint(): Breakpoint {
  if (window.matchMedia('(max-width: 576px)').matches) {
    return 'sm'; // Small screens
  } else if (window.matchMedia('(max-width: 768px)').matches) {
    return 'md'; // Medium screens
  } else if (window.matchMedia('(max-width: 992px)').matches) {
    return 'lg'; // Large screens
  } else {
    return 'xl'; // Extra-large screens
  }
}

export default useResponsive;
