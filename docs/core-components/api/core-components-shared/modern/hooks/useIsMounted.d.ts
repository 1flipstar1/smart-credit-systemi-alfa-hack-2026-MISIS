import { type RefObject } from 'react';
export declare const useIsMounted: () => [isMountedRef: RefObject<boolean>, runIfMounted: (callback: () => void) => void];
