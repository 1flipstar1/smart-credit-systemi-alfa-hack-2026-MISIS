import React from 'react';
import { type AmountProps } from '../types';
/**
 * Компонент для отображения суммы, согласно следующему гайдлайну:
 * https://design.alfabank.ru/patterns/amount
 * Не содержит стилей кроме неразрывности строки
 *
 * @deprecated Используйте основной компонент. Стилизацию можно настроить через пропсы
 */
export declare const PureAmount: React.FC<AmountProps>;
