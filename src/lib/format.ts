export const rub = (value: number) => `${Math.round(value).toLocaleString('ru-RU')} ₽`;

export const shortRub = (value: number) => {
    if (value >= 1e6) return `${String(+(value / 1e6).toFixed(1)).replace('.', ',')} млн ₽`;
    return `${Math.round(value / 1000)} тыс ₽`;
};

export const termLabel = (months: number) => {
    if (months < 12 || months % 12) return `${months} мес`;
    const years = months / 12;
    if (years === 1) return '1 год';
    return `${years} ${years < 5 ? 'года' : 'лет'}`;
};

export const percent = (value: number) => `${String(+value.toFixed(1)).replace('.', ',')}%`;

/** Annuity payment for an amount in rubles, a yearly rate in percent and a term in months. */
export const annuity = (amount: number, rate: number, months: number) => {
    const r = rate / 1200;
    if (!r) return amount / months;
    return (amount * r) / (1 - Math.pow(1 + r, -months));
};

export type ScheduleRow = {principal: number; interest: number};

export const schedule = (amount: number, rate: number, months: number, differentiated: boolean) => {
    const r = rate / 1200;
    const pay = annuity(amount, rate, months);
    const rows: ScheduleRow[] = [];
    let balance = amount;
    for (let i = 0; i < months; i++) {
        const interest = balance * r;
        const principal = differentiated ? amount / months : pay - interest;
        rows.push({principal, interest});
        balance -= principal;
    }
    return rows;
};

export const time = (iso: string) =>
    new Date(iso).toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'});

export const dateTime = (iso: string) =>
    new Date(iso).toLocaleString('ru-RU', {day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'});

/** Human-readable application number derived from the backend UUID. */
export const appNumber = (id: string) => `КЗ-2026-${parseInt(id.replace(/-/g, '').slice(0, 6), 16) % 90000 + 10000}`;
