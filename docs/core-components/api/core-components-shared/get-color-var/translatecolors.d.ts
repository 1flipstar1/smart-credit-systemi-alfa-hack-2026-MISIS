export type WithThemeColorValue = {
    type: 'WITH_THEME';
    value: string;
};
export type WithoutThemeColorValue = {
    type: 'WITHOUT_THEME';
    value: string;
};
export type ColorValue = WithThemeColorValue | WithoutThemeColorValue;
/**
 * Функция преобразования цветов.
 * Делит названия цвета пополам, по ключевому слову Color на prefix и postfix, и преобразует в кебаб-стайл.
 * Есть обработка правил, не подходящие под шаблон.
 */
export declare const translateColors: (colorName: string) => ColorValue;
