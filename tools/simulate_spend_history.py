# tools/simulate_spend_history.py

import os
import json
import random
from datetime import datetime, timedelta

HISTORY_FILE = "tools/spend_history_log.json"

def generate_fake_spend(start_amount=70000, days=7):
    history = []
    for i in range(days):
        amount = round(start_amount + random.uniform(-2000, 3000), 2)
        timestamp = (datetime.now() - timedelta(days=days - i)).isoformat()
        history.append({"timestamp": timestamp, "total": amount})
    return history

def write_spend_history(entries):
    os.makedirs("tools", exist_ok=True)
    with open(HISTORY_FILE, "w") as f:
        json.dump(entries, f, indent=2)
    print(f"✅ Simulated {len(entries)} days of spend history written to {HISTORY_FILE}")

if __name__ == "__main__":
    simulated = generate_fake_spend()
    write_spend_history(simulated)
