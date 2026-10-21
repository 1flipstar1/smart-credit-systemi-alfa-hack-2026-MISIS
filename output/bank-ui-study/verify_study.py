from pathlib import Path
import json
from playwright.sync_api import sync_playwright

root=Path(__file__).parent.resolve()
files=['alfa-credit-01-guided.html','alfa-credit-02-calculator.html','alfa-credit-03-business-goals.html','alfa-credit-04-assistant.html','alfa-credit-05-comparison.html']
results=[]
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path='C:/Program Files/Google/Chrome/Application/chrome.exe',headless=True)
    page=browser.new_page(viewport={'width':1440,'height':1100},device_scale_factor=1)
    errors=[]
    page.on('pageerror',lambda err: errors.append(str(err)))
    for i,f in enumerate(files,1):
        page.goto((root/f).as_uri())
        page.screenshot(path=str(root/f'preview-{i:02}.png'))
        page.screenshot(path=str(root/f'desktop-{i:02}.png'),full_page=True)
        for w in [1440,720,390]:
            page.set_viewport_size({'width':w,'height':900})
            overflow=page.evaluate('document.documentElement.scrollWidth > innerWidth')
            broken=page.locator('img').evaluate_all('(imgs)=>imgs.filter(x=>!x.complete||!x.naturalWidth).length')
            assert not overflow,(f,w,'horizontal overflow')
            assert broken==0,(f,w,'broken images')
            results.append({'file':f,'width':w,'overflow':overflow,'broken_images':broken})
            if w==390:page.screenshot(path=str(root/f'mobile-{i:02}.png'),full_page=True)
        page.set_viewport_size({'width':1440,'height':1100})
    page.goto((root/files[0]).as_uri())
    assert page.locator('#next').is_disabled()
    for i in range(4):
        page.locator('#answers button').first.click()
        page.locator('#next').click()
    assert 'Кредит одной суммой'.lower() in page.locator('#question').inner_text().lower()
    page.locator('#prev').click()
    assert page.locator('#stepLabel').inner_text()=='Шаг 4 из 4'
    page.goto((root/files[1]).as_uri())
    page.locator('#amount').fill('2000000')
    page.locator('#term').select_option('36')
    assert '2' in page.locator('#amountOut').inner_text()
    assert page.locator('#termOut').inner_text()=='36 месяцев'
    page.locator('#format button').nth(1).click()
    assert page.locator('#calcProduct').inner_text()=='Кредитная линия'
    page.goto((root/files[2]).as_uri())
    page.locator('#taskGrid button').nth(1).click()
    assert page.locator('#taskTitle').inner_text()=='Купить оборудование'
    page.locator('#taskFormat button').nth(1).click()
    assert page.locator('#taskProduct').inner_text()=='Кредитная линия'
    page.goto((root/files[3]).as_uri())
    page.locator('#chatChoices button').first.click()
    page.locator('#chatChoices button').nth(1).click()
    assert page.locator('#messages .outcome h3').inner_text()=='Кредитная линия'
    page.locator('#resetChat').click()
    assert page.locator('#messages .bubble').count()==1
    page.goto((root/files[4]).as_uri())
    page.locator('#compareFormat button').nth(1).click()
    assert page.locator('#compareCards h2').first.inner_text()=='Кредитная линия'
    page.locator('#compareGoal').select_option(label='Купить оборудование')
    assert 'купить оборудование' in page.locator('#compareCards').inner_text()
    for f in ['alfa-credit-concepts.html','alfa-design-system.html','alfa-reference-atlas.html']:
        page.goto((root/f).as_uri())
        assert page.locator('h1').count()==1
    assert not errors,errors
    browser.close()
(root/'verification.json').write_text(json.dumps({'checks':results,'javascript_errors':errors,'interactions':'All five scenarios passed'},ensure_ascii=False,indent=2),encoding='utf-8')
print('PASS: 15 responsive checks, 5 interaction scenarios, 3 companion pages; no JavaScript errors')
