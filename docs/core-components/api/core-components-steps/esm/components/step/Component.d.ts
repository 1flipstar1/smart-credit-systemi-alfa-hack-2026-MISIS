import { type FC } from 'react';
import { type CommonProps } from '../../types/common-props';
import { type StepIndicatorProps } from '../step-indicator';
interface StepProps extends CommonProps {
    /**
     * Номер шага
     */
    stepNumber: number;
    /**
     * Маркер того, что текущий шаг выбран
     */
    isSelected: boolean;
    /**
     * Маркер того, что текущий шаг доступен для клика
     */
    disabled: boolean;
    /**
     * Маркер того, что текущий шаг находится в состоянии "Positive"
     */
    isPositive: boolean;
    /**
     * Маркер того, что текущий шаг находится в состоянии "Error"
     */
    isError: boolean;
    /**
     * Маркер того, что текущий шаг находится в состоянии "isCriticalError"
     */
    isCriticalError: boolean;
    /**
     * Маркер того, что текущий шаг находится в состоянии "Warning"
     */
    isWarning: boolean;
    /**
     * Маркер того, что текущий шаг находится в состоянии "Waiting"
     */
    isWaiting: boolean;
    /**
     * Маркер того, что текущий шаг нужно пометить как завершенный
     */
    isStepCompleted: boolean;
    /**
     * Свойства кастомного индикатора текущего шага
     */
    customStepIndicator?: StepIndicatorProps | null;
    /**
     * Указывает, является ли текущий шаг последним в списке
     */
    isNotLastStep?: boolean;
    /**
     * Обработчик нажатия на текущей шаг
     * @param stepNumber - номер шага
     */
    onClick: (stepNumber: number) => void;
}
export declare const Step: FC<StepProps>;
export {};
