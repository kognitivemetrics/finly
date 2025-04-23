import subprocess
import json
import os
import re

def get_llm_usage(query=""):
    try:
        result = subprocess.run(
            ["rcc", "run"],
            cwd="robocorp-dashboardbot",
            capture_output=True,
            text=True,
            timeout=20
        )

        if result.returncode != 0:
            return "LLM cost unavailable (robot error)"

        json_path = os.path.join("robocorp-dashboardbot", "output", "llm_data.json")
        if not os.path.exists(json_path):
            return "LLM cost file missing"

        with open(json_path, "r") as f:
            data = json.load(f)

        # Acceptable key variations
        for key in data:
            if "total" in key.lower() and "$" in data[key]:
                return data[key] + " (from local LLM dashboard)"

        return "LLM cost not found in output"

    except Exception as e:
        return f"LLM error: {str(e)}"

def extract_float(text):
    match = re.search(r"\$([\d,\.]+)", text)
    if not match:
        return 0.0
    return float(match.group(1).replace(',', ''))
