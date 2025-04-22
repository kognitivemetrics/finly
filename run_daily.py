import schedule
import time
from tools.cost_drift_alert import check_cost_drift

def job():
    alert = check_cost_drift(threshold=10.0)
    print("[Daily Check]", alert)

schedule.every().day.at("08:00").do(job)

while True:
    schedule.run_pending()
    time.sleep(60)
