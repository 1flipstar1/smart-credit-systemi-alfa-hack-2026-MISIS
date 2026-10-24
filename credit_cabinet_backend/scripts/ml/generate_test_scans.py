import json
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

random.seed(42)

OUT = Path("data/ml/test_scans")
OUT.mkdir(parents=True, exist_ok=True)

try:
    font = ImageFont.truetype("DejaVuSans.ttf", 18)
except Exception:
    font = ImageFont.load_default()


def make_image(lines, blur=0, noise=0, filename=None):
    img = Image.new("RGB", (600, 400), "white")
    draw = ImageDraw.Draw(img)
    y = 20
    for line in lines:
        draw.text((20, y), line, fill="black", font=font)
        y += 30
    if blur:
        img = img.filter(ImageFilter.GaussianBlur(blur))
    if noise:
        px = img.load()
        for _ in range(noise):
            x = random.randrange(img.width)
            yy = random.randrange(img.height)
            px[x, yy] = (random.randrange(256), random.randrange(256), random.randrange(256))
    if filename:
        img.save(OUT / filename)
    return img


ground_truth = []

def add_entry(name, doc_type, fields, status, defects, notes):
    ground_truth.append({
        "scan_path": f"data/ml/test_scans/{name}",
        "expected_document_type": doc_type,
        "expected_fields": fields,
        "expected_status": status,
        "injected_defects": defects,
        "notes": notes,
    })


# 1
make_image([
    "Карточка предприятия",
    "Наименование: ООО Ромашка",
    "ИНН: 7701234567",
    "ОГРН: 1027700132195",
    "Юридический адрес: г. Москва, ул. Ленина, д. 5",
    "Директор: Иванов Иван Иванович",
    "Дата регистрации: 15.03.2021",
], filename="company_card_good.png")
add_entry("company_card_good.png", "company_card",
          {"name": "ООО Ромашка", "inn": "7701234567", "ogrn": "1027700132195", "address": "г. Москва, ул. Ленина, д. 5", "director": "Иванов Иван Иванович", "registration_date": "15.03.2021"},
          "OK", [], "clean scan")

# 2
make_image([
    "Карточка предприятия",
    "Наименование: ООО Ромашка",
    "ИНН: 7701234567",
    "ОГРН: 1027700132195",
], filename="company_card_bad_inn.png")
add_entry("company_card_bad_inn.png", "company_card",
          {"name": "ООО Ромашка", "inn": "7701234567", "ogrn": "1027700132195"},
          "ISSUES_FOUND", ["inn_mismatch"], "INN mismatch with application")

# 3
make_image([
    "Карточка предприятия",
    "Наименование: ООО Ромашка",
    "ИНН: 7701234567",
    "ОГРН: 1027700132195",
], blur=4, filename="company_card_blurry.png")
add_entry("company_card_blurry.png", "company_card",
          {"name": "ООО Ромашка", "inn": "7701234567", "ogrn": "1027700132195"},
          "NEEDS_RESCAN", ["blur"], "blurry scan")

# 4
make_image([
    "Карточка предприятия",
    "Наименование: ООО Ромашка",
    "ИНН: 7701234567",
], noise=5000, filename="company_card_unreadable.png")
add_entry("company_card_unreadable.png", "company_card",
          {"name": "ООО Ромашка", "inn": "7701234567"},
          "NEEDS_RESCAN", ["noise"], "heavy noise")

# 5
make_image([
    "Карточка предприятия",
    "Наименование: ООО Ромашка",
    "ОГРН: 1027700132195",
], filename="company_card_missing_inn.png")
add_entry("company_card_missing_inn.png", "company_card",
          {"name": "ООО Ромашка", "ogrn": "1027700132195"},
          "NEEDS_REVIEW", ["missing_inn"], "no INN field")

# 6
make_image([
    "Заявка на кредит",
    "ИНН: 7701234567",
    "Сумма: 1500000",
    "Срок: 12",
    "Цель: пополнение оборотных средств",
], filename="application_good.png")
add_entry("application_good.png", "credit_application",
          {"inn": "7701234567", "amount": "1500000", "term_months": "12", "purpose": "пополнение оборотных средств"},
          "OK", [], "clean application")

# 7
make_image([
    "Заявка на кредит",
    "ИНН: 7701234567",
    "Сумма: 999999",
    "Срок: 12",
], filename="application_bad_amount.png")
add_entry("application_bad_amount.png", "credit_application",
          {"inn": "7701234567", "amount": "999999", "term_months": "12"},
          "ISSUES_FOUND", ["amount_mismatch"], "amount mismatch")

# 8
make_image([
    "Карточка предприятия",
    "Наименование: ООО Ромашка",
    "ИНН: 77O1234567",
    "ОГРН: 1027700132195",
], filename="company_card_auto_corr.png")
add_entry("company_card_auto_corr.png", "company_card",
          {"name": "ООО Ромашка", "inn": "7701234567", "ogrn": "1027700132195"},
          "OK", ["ocr_autocorrect"], "INN with letter O")

# 9
make_image([
    "Карточка ИП",
    "Наименование: ИП Иванов",
    "ИНН: 123456789012",
    "ОГРНИП: 304774612345678",
], filename="company_card_ip.png")
add_entry("company_card_ip.png", "company_card",
          {"name": "ИП Иванов", "inn": "123456789012", "ogrn": "304774612345678"},
          "OK", [], "IP card")

# 10
make_image([
    "Финансовый отчет",
    "ИНН: 7701234567",
    "Выручка: 1000000",
    "Прибыль: 200000",
], filename="financial_statement_good.png")
add_entry("financial_statement_good.png", "financial_statement",
          {"inn": "7701234567", "revenue": "1000000", "profit": "200000"},
          "OK", [], "financial statement")

# 10 variations
for i in range(10):
    blur = random.choice([0, 1, 2, 3])
    noise = random.choice([0, 500, 2000])
    make_image([
        "Карточка предприятия",
        "Наименование: ООО Тест",
        "ИНН: 7701234567",
        "ОГРН: 1027700132195",
    ], blur=blur, noise=noise, filename=f"variation_{i}.png")
    status = "OK" if blur == 0 and noise == 0 else ("NEEDS_RESCAN" if noise > 1000 or blur >= 3 else "NEEDS_REVIEW")
    add_entry(f"variation_{i}.png", "company_card",
              {"name": "ООО Тест", "inn": "7701234567", "ogrn": "1027700132195"},
              status, [f"blur={blur}", f"noise={noise}"], "variation")

with open(OUT / "ground_truth.json", "w", encoding="utf-8") as f:
    json.dump(ground_truth, f, ensure_ascii=False, indent=2)

print("Generated", len(ground_truth), "scans")
