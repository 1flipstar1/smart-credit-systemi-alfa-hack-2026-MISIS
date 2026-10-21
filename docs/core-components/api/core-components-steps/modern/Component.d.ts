import React from 'react';
import { type StepIndicatorProps } from './components/step-indicator';
import { type CommonProps } from './types/common-props';
export type StepsProps = {
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Активный шаг, указанный по умолчанию
     * @default 1
     */
    defaultActiveStep?: number;
    /**
     * Активный шаг
     */
    activeStep?: number;
    /**
     * Управление возможностью отключения пометки пройденного шага
     * @default true
     */
    isMarkCompletedSteps?: boolean;
    /**
     * Кастомный метод для управления состоянием disabled шага и
     * возможностью перехода на этот шаг
     * @param stepNumber - номер шага
     * @return Флаг состояния disabled
     */
    checkIsStepDisabled?: (stepNumber: number) => boolean;
    /**
     * Кастомный метод для управления состоянием шага error
     * @param stepNumber - номер шага
     * @return Флаг состояния error
     */
    checkIsStepError?: (stepNumber: number) => boolean;
    /**
     * Кастомный метод для управления состоянием шага criticalError
     * @param stepNumber - номер шага
     * @return Флаг состояния error
     */
    checkIsStepCriticalError?: (stepNumber: number) => boolean;
    /**
     * Кастомный метод для управления состоянием шага warning
     * @param stepNumber - номер шага
     * @return Флаг состояния warning
     */
    checkIsStepWarning?: (stepNumber: number) => boolean;
    /**
     * Кастомный метод для управления состоянием шага waiting
     * @param stepNumber - номер шага
     * @return Флаг состояния waiting
     */
    checkIsStepWaiting?: (stepNumber: number) => boolean;
    /**
     * Кастомный метод для управления состоянием шага positive
     * @param stepNumber - номер шага
     * @return Флаг состояния positive
     */
    checkIsStepPositive?: (stepNumber: number) => boolean;
    /**
     * Кастомный метод для установки кастомного индикатора шага
     * @param stepNumber - номер шага
     * @return Объект StepIndicatorProps { className, content, iconColor } или null
     */
    checkIsStepCustom?: (stepNumber: number) => StepIndicatorProps | null;
    /**
     * Обработчик клика на шаг
     * @param stepNumber - номер активного шага
     */
    onChange?: (stepNumber: number) => void;
} & CommonProps;
export declare const Steps: React.FC<StepsProps>;
