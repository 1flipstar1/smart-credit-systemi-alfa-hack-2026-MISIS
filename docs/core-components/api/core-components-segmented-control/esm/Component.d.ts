import React, { type FC, type ReactElement } from 'react';
import { type SkeletonProps } from '@alfalab/core-components-skeleton/esm';
import { type SegmentProps } from './components';
import { type ContextType } from './context';
import { type IDType } from './typing';
export interface SegmentedControlProps {
    /**
     * Дополнительный className
     */
    className?: string;
    /**
     * Обработчик смены выбранного сегмента
     */
    onChange: ContextType['onChange'];
    /**
     * ID выбранного сегмента
     */
    selectedId: IDType;
    /**
     * Размер компонента
     * @default 32
     */
    size?: 32 | 40;
    /**
     * Форма компонента
     */
    shape?: 'rounded' | 'rectangular';
    /**
     * Дочерние элементы
     */
    children: Array<ReactElement<SegmentProps>>;
    /**
     * Набор цветов для компонента
     */
    colors?: 'default' | 'inverted';
    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
    /**
     * Дополнительные инлайн стили для враппера
     */
    style?: React.CSSProperties;
    /**
     * Отключает пользовательский ввод
     * @default false
     */
    disabled?: boolean;
    /**
     * Настройки скелетона
     */
    skeleton?: SkeletonProps;
}
export declare const SegmentedControl: FC<SegmentedControlProps>;
