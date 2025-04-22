# tools/drift_logger.py
import os
import json
from datetime import datetime

HISTORY_FILE = "tools/spend_history_log.json"

def log_spend_snapshot(total: float):
    timestamp = datetime.now().isoformat()
    entry = {"timestamp": timestamp, "total": total}

    # Ensure tools dir exists
    os.makedirs("tools", exist_ok=True)

    # Load or create log file
    if os.path.exists(HISTORY_FILE):
        with open(HISTORY_FILE, "r") as f:
            history = json.load(f)
    else:
        history = []

    history.append(entry)

    with open(HISTORY_FILE, "w") as f:
        json.dump(history, f, indent=2)

    print(f"[Drift Log] Snapshot recorded: ${total:,.2f} at {timestamp}")
