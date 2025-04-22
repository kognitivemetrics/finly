import json
import os
from datetime import datetime
from tools.get_total_spend import get_total_cloud_spend  # adjust path if needed
from tools.drift_logger import log_spend_snapshot

HISTORY_FILE = "tools/spend_history.json"

def check_cost_drift(threshold=10.0) -> str:
    current_summary = get_total_cloud_spend()
    
    lines = current_summary.splitlines()
    total_line = next((line for line in lines if "Total Cloud Spend" in line), None)
    if not total_line:
        return "Unable to parse current total spend."

    current_total = float(total_line.split("$")[-1].replace(",", "").strip())
    log_spend_snapshot(current_total)

    # Load previous snapshot
    if os.path.exists(HISTORY_FILE):
        with open(HISTORY_FILE, "r") as f:
            history = json.load(f)
    else:
        history = {}

    last_entry = history.get("last_total", 0.0)
    delta = current_total - last_entry
    percent_change = (delta / last_entry) * 100 if last_entry else 0.0

    # Save new snapshot
    history["last_total"] = current_total
    history["last_checked"] = datetime.now().isoformat()
    with open(HISTORY_FILE, "w") as f:
        json.dump(history, f, indent=2)
    
    if abs(percent_change) >= threshold:
        direction = "increased" if percent_change > 0 else "decreased"
        alert_msg = (
            f"⚠️ Cost Alert: Total spend {direction} by {percent_change:.1f}%\n"
            f"Previous: ${last_entry:,.2f} → Current: ${current_total:,.2f}"
        )
    
        # Simulate sending an email
        os.makedirs("alerts", exist_ok=True)
        with open(f"alerts/alert_{datetime.now():%Y%m%d_%H%M%S}.txt", "w") as f:
            f.write(alert_msg)

    return alert_msg
