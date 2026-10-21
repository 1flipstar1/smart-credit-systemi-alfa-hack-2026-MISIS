import { type StatusBadgeIcon, type StatusBadgeSizes, type StatusBadgeViews } from '../types/statusBadgePropTypes';
export type IconMap = Record<StatusBadgeViews, Record<NonNullable<StatusBadgeSizes>, StatusBadgeIcon>>;
export declare const ICON_MAP: IconMap;
