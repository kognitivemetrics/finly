import json
import os
import subprocess

def get_aws_dashboard_bill(query="") -> str:
    try:
        result = subprocess.run(
            ["rcc", "run"],
            cwd="robocorp-billbot",  # ✅ use your actual folder
            capture_output=True,
            text=True,
            timeout=20
        )

        if result.returncode != 0:
            print("[ERROR] RCC failed:", result.stderr)
            return "$0.00"

        path = os.path.join("robocorp-billbot", "output", "aws_bill.json")
        if not os.path.exists(path):
            print("[ERROR] JSON file not found.")
            return "$0.00"

        with open(path, "r") as f:
            data = json.load(f)

        return data.get("AWS Total", "$0.00")

    except Exception as e:
        print("[EXCEPTION]", str(e))
        return "$0.00"
