from tools.get_llm_usage import get_llm_usage
from tools.get_aws_dashboard_bill import get_aws_dashboard_bill
from tools.preferences import get_user_prefs

def get_total_cloud_spend(query=""):
    prefs = get_user_prefs("rajapabba")
    preferred_cloud = prefs.get("preferred_cloud", "all")
    threshold = prefs.get("alert_threshold", 5.0)

    # logic example
    if preferred_cloud != "all":
        return f"Showing cost for {preferred_cloud.capitalize()}"
    
    return "Showing cost across all clouds"