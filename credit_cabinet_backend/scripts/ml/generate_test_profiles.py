import json
import random
from pathlib import Path

random.seed(42)

OUT = Path("data/ml/test_profiles.json")

profiles = []

def make_profile(i, group, expected):
    margin = round(random.uniform(0.05, 0.35), 3)
    stability = round(random.uniform(0.3, 0.95), 3)
    discipline = round(random.uniform(0.4, 1.0), 3)
    if group == "good":
        margin = round(random.uniform(0.15, 0.35), 3)
        stability = round(random.uniform(0.8, 0.98), 3)
        discipline = round(random.uniform(0.9, 1.0), 3)
    elif group == "medium":
        margin = round(random.uniform(0.08, 0.2), 3)
        stability = round(random.uniform(0.6, 0.85), 3)
        discipline = round(random.uniform(0.7, 0.9), 3)
    elif group == "borderline":
        margin = round(random.uniform(0.04, 0.12), 3)
        stability = round(random.uniform(0.45, 0.65), 3)
        discipline = round(random.uniform(0.55, 0.75), 3)
    elif group == "bad":
        margin = round(random.uniform(0.01, 0.06), 3)
        stability = round(random.uniform(0.25, 0.45), 3)
        discipline = round(random.uniform(0.35, 0.6), 3)
    elif group == "hardstop":
        margin = round(random.uniform(-0.1, 0.05), 3)
        stability = round(random.uniform(0.1, 0.4), 3)
        discipline = round(random.uniform(0.1, 0.4), 3)

    profile = {
        "profile_id": f"P{i:03d}",
        "group": group,
        "inn": f"770{i:07d}",
        "revenue": random.randint(500000, 5000000),
        "margin": margin,
        "stability": stability,
        "discipline": discipline,
        "overdue_days": 0 if group != "hardstop" else random.choice([95, 120, 150]),
        "bankruptcy_flag": group == "hardstop",
        "inactive_flag": group == "hardstop",
        "expected_decision": expected,
    }
    profiles.append(profile)


# 10 good
for i in range(10):
    make_profile(i, "good", "APPROVE")
# 8 medium
for i in range(10, 18):
    make_profile(i, "medium", "APPROVE_MODIFIED")
# 5 borderline
for i in range(18, 23):
    make_profile(i, "borderline", "INFO_REQUEST")
# 4 bad
for i in range(23, 27):
    make_profile(i, "bad", "REJECT")
# 3 hard-stop
for i in range(27, 30):
    make_profile(i, "hardstop", "REJECT")

with open(OUT, "w", encoding="utf-8") as f:
    json.dump(profiles, f, ensure_ascii=False, indent=2)

print("Generated", len(profiles), "profiles")
