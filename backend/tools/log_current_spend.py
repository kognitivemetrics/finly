# tools/log_current_spend.py

from tools.get_total_spend import get_total_cloud_spend
from tools.drift_logger import log_spend_snapshot

def extract_total(line: str) -> float:
    try:
        return float(line.split("$")[-1].replace(",", "").strip())
    except Exception:
        return 0.0

if __name__ == "__main__":
    result = get_total_cloud_spend()
    lines = result.splitlines()
    total_line = next((l for l in lines if "Total Cloud Spend" in l), "")
    total_value = extract_total(total_line)

    log_spend_snapshot(total_value)
