import { type StatusBadgeCustomIcon } from '@alfalab/core-components-status-badge/esm';
type GetCustomIcons = StatusBadgeCustomIcon | null;
export declare const useCustomIcons: () => {
    getCustomIcons: (getBadgeIcons?: StatusBadgeCustomIcon) => GetCustomIcons;
};
export {};
