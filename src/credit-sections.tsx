import React, {useState} from 'react';
import {createRoot, type Root} from 'react-dom/client';
import {flushSync} from 'react-dom';
import {Button} from '@alfalab/core-components/button';
import {Input} from '@alfalab/core-components/input';
import {Typography} from '@alfalab/core-components/typography';
import '@alfalab/core-components/vars/colors-bluetint.css';
import '@alfalab/core-components/vars/colors-addons.css';
import '@alfalab/core-components/vars/common.css';
import '@alfalab/core-components/vars/typography-vars.css';
import '@alfalab/core-components/vars/border-radius.css';
import '@alfalab/core-components/vars/gaps.css';
import '@alfalab/core-components/themes/site.css';
import './credit-sections.css';

type Conditions = {rate_from: number | null; amount_to: number | null; term_to_months: number | null};
type Category = Conditions & {code: string; title: string; description: string; products_count: number; products: string[]};
type SectionData = {
    categories: Category[];
    lead: {inn: string; phone: string};
    onLeadChange: (field: 'inn' | 'phone', value: string) => void;
    onLeadSubmit: () => void;
};

const number = (n: number) => n.toLocaleString('ru-RU');
const rate = (n: number | null) => n === null ? 'Индивидуально' : `от ${number(n)}%`;
const amount = (n: number | null) => n === null ? 'Индивидуально' : `до ${number(n / 1e6)} млн ₽`;
const term = (n: number | null) => n === null ? 'Индивидуально' : n % 12 ? `до ${n} мес.` : `до ${n / 12} ${n === 12 ? 'года' : 'лет'}`;

// Decorative numbering for the landing infographic, not a progress control.
// Core Steps is a wizard and CircularProgressBar has no dotted-track / thin-stroke API.
// Typography and all interactive controls remain genuine Core Components.
function StepMarker({step}: {step: number}) {
    return <div className='credit-step-marker' aria-hidden='true'>
        <svg viewBox='0 0 48 48' focusable='false'>
            <circle className='credit-step-track' cx='24' cy='24' r='23'/>
            <circle className='credit-step-arc' cx='24' cy='24' r='23' pathLength='100' strokeDasharray={`${step / 3 * 100} 100`}/>
        </svg>
        <Typography.Text view='primary-large' weight='bold'>{step}</Typography.Text>
    </div>;
}

function HowTo() {
    const steps = [
        ['Заполните заявку', 'Нужна только основная информация о вашем бизнесе'],
        ['Получите решение', 'Покажем персональные предложения онлайн'],
        ['Получите деньги', 'Ознакомьтесь с документами и подпишите их прямо в кабинете'],
    ];
    return <>
        <div className='credit-section-title'>
            <Typography.Title tag='h2' view='large' font='system' defaultMargins={false}>Оформите кредит для бизнеса</Typography.Title>
        </div>
        <ol className='credit-steps'>
            {steps.map(([title, description], i) => <li className='credit-step' key={title}>
                <StepMarker step={i + 1}/>
                <div className='credit-step-card'>
                    <Typography.Title tag='h3' view='small' font='system' defaultMargins={false}>{title}{i === 1 && <><br/>онлайн</>}</Typography.Title>
                    <Typography.Text tag='p' view='primary-medium' color='secondary' defaultMargins={false}>{description}</Typography.Text>
                </div>
            </li>)}
        </ol>
    </>;
}

function Kinds({categories}: SectionData) {
    return <>
        <div className='credit-section-heading'>
            <Typography.Title tag='h2' view='medium' font='styrene' defaultMargins={false}>Виды кредитов и условия</Typography.Title>
            <Typography.Text view='primary-small' color='secondary'>
                {categories.reduce((sum, c) => sum + c.products_count, 0)} предложений · {categories.length} групп
            </Typography.Text>
        </div>
        <div className='credit-kinds'>
            {categories.map(c => <article className='credit-kind' key={c.code}>
                <Typography.Title tag='h3' view='xsmall' font='styrene' defaultMargins={false}>{c.title}</Typography.Title>
                <Typography.Text tag='p' view='primary-small' color='secondary' defaultMargins={false}>{c.description}</Typography.Text>
                {c.rate_from === null && c.amount_to === null && c.term_to_months === null ? <div className='credit-individual'>
                    <Typography.Text view='primary-small' color='secondary'>Условия рассчитываются индивидуально</Typography.Text>
                </div> : <dl className='credit-conditions'>
                    {[['Ставка', rate(c.rate_from)], ['Сумма', amount(c.amount_to)], ['Срок', term(c.term_to_months)]].map(([label, value]) => <div key={label}>
                        <dt><Typography.Text view='secondary-medium' color='secondary'>{label}</Typography.Text></dt>
                        <dd><Typography.Text view='primary-small' weight='medium'>{value === 'Индивидуально' ? 'По заявке' : value}</Typography.Text></dd>
                    </div>)}
                </dl>}
                <Typography.Text tag='p' view='secondary-medium' color='secondary' defaultMargins={false}>
                    {c.products.slice(0, 3).join(', ')}{c.products_count > 3 ? ` и ещё ${c.products_count - 3}` : ''}
                </Typography.Text>
            </article>)}
            <article className='credit-kind credit-kind-match' data-test-id='credit-match'>
                <Typography.Title tag='h3' view='xsmall' font='styrene' color='primary-inverted' defaultMargins={false}>
                    Подобрать подходящий кредит
                </Typography.Title>
                <Typography.Text tag='p' view='primary-medium' color='secondary-inverted' defaultMargins={false}>
                    Расскажите, на что нужны деньги. Поможем выбрать продукт, сумму и срок под задачу вашего бизнеса.
                </Typography.Text>
                <div className='credit-kind-action'>
                    <Button view='primary' colors='inverted' size={48} block data-go='params'>Подобрать кредит →</Button>
                </div>
            </article>
        </div>
        <div className='credit-catalog-note'>
            <Typography.Text tag='p' view='secondary-medium' color='secondary' defaultMargins={false}>
                Краткая сводка опубликованных условий по каждой группе. Минимальная ставка, максимальная сумма и срок могут относиться к разным продуктам. Точные условия — в выбранном предложении; расчёт предварительный.
            </Typography.Text>
        </div>
    </>;
}

const formatPhone = (value: string) => {
    let digits = value.replace(/\D/g, '');
    if (digits.startsWith('8')) digits = '7' + digits.slice(1);
    if (digits && !digits.startsWith('7')) digits = '7' + digits;
    digits = digits.slice(0, 11);
    const p = digits.slice(1);
    return (digits ? '+7' : '') + (p.length ? ' (' + p.slice(0,3) : '') +
        (p.length >= 3 ? ') ' + p.slice(3,6) : '') + (p.length >= 6 ? '-' + p.slice(6,8) : '') +
        (p.length >= 8 ? '-' + p.slice(8,10) : '');
};

function Lead({lead, onLeadChange, onLeadSubmit}: SectionData) {
    const [values, setValues] = useState(lead);
    const [errors, setErrors] = useState({inn: '', phone: ''});
    const update = (field: 'inn' | 'phone', value: string) => {
        const formatted = field === 'inn' ? value.replace(/\D/g, '').slice(0,12) : formatPhone(value);
        setValues(v => ({...v, [field]: formatted}));
        setErrors(e => ({...e, [field]: ''}));
        onLeadChange(field, formatted);
    };
    return <div className='credit-lead-band'>
        <form className='credit-lead-form' noValidate onSubmit={e => {
            e.preventDefault();
            e.stopPropagation();
            const next = {
                inn: /^(\d{10}|\d{12})$/.test(values.inn) ? '' : 'ИНН — 10 цифр для ООО или 12 для ИП',
                phone: values.phone.replace(/\D/g, '').length === 11 ? '' : 'Введите номер полностью',
            };
            setErrors(next);
            if (!next.inn && !next.phone) onLeadSubmit();
        }} aria-labelledby='credit-lead-title'>
            <Typography.Title id='credit-lead-title' tag='h3' view='small' font='styrene' defaultMargins={false}>Заявка на кредит</Typography.Title>
            <Typography.Text tag='p' view='primary-small' color='secondary' defaultMargins={false}>
                Укажите ИНН — остальное заполним сами и покажем предварительное решение
            </Typography.Text>
            <Input id='lead-inn' label='ИНН компании или ИП' inputMode='numeric' maxLength={12} size={56} block
                value={values.inn} error={errors.inn} onChange={(_, {value}) => update('inn',value)}/>
            <Input id='lead-phone' label='Телефон' type='tel' autoComplete='tel' size={56} block
                value={values.phone} error={errors.phone} onChange={(_, {value}) => update('phone',value)}/>
            <Button id='lead-btn' type='submit' view='accent' size={56} block>Продолжить</Button>
            <Typography.Text tag='p' view='secondary-medium' color='secondary' defaultMargins={false}>
                Нажимая «Продолжить», вы даёте согласие на обработку персональных данных
            </Typography.Text>
        </form>
    </div>;
}

const roots: Root[] = [];
const sections = {
    unmount() { roots.splice(0).forEach(root => root.unmount()); },
    mount(data: SectionData) {
        for (const [id, content] of [
            ['credit-howto', <HowTo/>], ['credit-lead', <Lead {...data}/>], ['credit-kinds', <Kinds {...data}/>],
        ] as const) {
            const host = document.getElementById(id);
            if (host) {
                const root = createRoot(host);
                roots.push(root);
                flushSync(() => root.render(content));
            }
        }
    },
};
declare global { interface Window { CreditSections: typeof sections } }
window.CreditSections = sections;
