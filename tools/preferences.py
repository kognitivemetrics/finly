# File: tools/preferences.py

import os
import json
from fastapi import APIRouter
from pydantic import BaseModel

PREFS_DIR = "user_prefs"

router = APIRouter()

class PreferenceUpdate(BaseModel):
    user_id: str
    preferences: dict

def get_user_prefs(user_id="default"):
    """Load preferences for a given user/org."""
    path = os.path.join(PREFS_DIR, f"{user_id}.json")
    if not os.path.exists(path):
        return {
            "preferred_cloud": "all",
            "alert_threshold": 5.0,
            "output_format": "pdf",
            "time_range": "this month"
        }
    with open(path, "r") as f:
        return json.load(f)

def set_user_prefs(prefs, user_id="default"):
    """Persist preferences for a given user/org."""
    os.makedirs(PREFS_DIR, exist_ok=True)
    path = os.path.join(PREFS_DIR, f"{user_id}.json")
    with open(path, "w") as f:
        json.dump(prefs, f, indent=2)

def ensure_default_prefs(user_id="default"):
    """Create default preferences file if it doesn't exist."""
    path = os.path.join(PREFS_DIR, f"{user_id}.json")
    if not os.path.exists(path):
        set_user_prefs(get_user_prefs(user_id), user_id)

# Auto-setup default user on import
ensure_default_prefs("rajapabba")

@router.get("/get-preferences")
def get_prefs(user_id: str = "rajapabba"):
    return {"user_id": user_id, "preferences": get_user_prefs(user_id)}

@router.post("/set-preferences")
def set_prefs(data: PreferenceUpdate):
    set_user_prefs(data.preferences, user_id=data.user_id)
    return {"message": "Preferences updated", "user_id": data.user_id}
