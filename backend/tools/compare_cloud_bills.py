from tools.get_aws_bill_api import get_aws_bill
from tools.get_azure_bill_api import get_azure_bill
from tools.get_gcp_bill_api import get_gcp_bill

def compare_cloud_bills(query=""):
    aws = get_aws_bill()
    azure = get_azure_bill()
    gcp = get_gcp_bill()

    return (
        f"🌩️ Cloud Spend Summary:\n"
        f"  • AWS: {aws}\n"
        f"  • Azure: {azure}\n"
        f"  • GCP: {gcp}\n\n"
        "Let me know if you want a breakdown by service or recommendations to reduce cost."
    )
