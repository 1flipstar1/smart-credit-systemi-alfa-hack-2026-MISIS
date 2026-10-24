import React from 'react';
import {createRoot} from 'react-dom/client';
import {Button} from '@alfalab/core-components/button';
import {Typography} from '@alfalab/core-components/typography';
import '@alfalab/core-components/vars/colors-bluetint.css';
import '@alfalab/core-components/vars/colors-addons.css';
import '@alfalab/core-components/vars/common.css';
import '@alfalab/core-components/vars/typography-vars.css';
import '@alfalab/core-components/vars/border-radius.css';
import '@alfalab/core-components/vars/gaps.css';
import '@alfalab/core-components/themes/site.css';
import './fonts.css';
import './layout.css';

function App() {
    return (
        <main>
            <section className='system-note' aria-labelledby='system-title'>
                <Typography.Title id='system-title' tag='h1' view='small' font='styrene' defaultMargins={false}>
                    Одна система. Разные сценарии.
                </Typography.Title>
                <Typography.Text tag='p' view='primary-medium' color='secondary' defaultMargins={false}>
                    Настоящие компоненты Button, Input, Select, Radio, Typography, Tag и ProgressBar.
                    Общая официальная тема, единые состояния и адаптивная композиция.
                </Typography.Text>
                <Button view='secondary' href='https://core-ds.github.io/core-components/master/?path=/docs/intro--docs'>
                    Официальная документация ↗
                </Button>
            </section>
        </main>
    );
}

createRoot(document.getElementById('root')!).render(<App/>);
