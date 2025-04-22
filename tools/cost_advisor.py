def advise_on_aws_costs(query=""):
    return (
        "💡 AWS Optimization Tips:\n"
        "• Terminate or downsize idle EC2 instances.\n"
        "• Use Savings Plans or Reserved Instances.\n"
        "• Leverage S3 lifecycle rules to archive old data.\n"
        "• Schedule dev/test environments to shut down outside business hours.\n"
        "• Use AWS Compute Optimizer for rightsizing recommendations.\n"
    )

def advise_on_azure_costs(query=""):
    return (
        "💡 Azure Optimization Tips:\n"
        "• Identify underutilized VMs via Azure Advisor.\n"
        "• Switch to Reserved VM Instances or Savings Plans.\n"
        "• Use autoscale for App Services and AKS.\n"
        "• Move Blob storage to cool/archive tiers.\n"
        "• Delete unused public IPs and orphaned disks.\n"
    )

def advise_on_gcp_costs(query=""):
    return (
        "💡 GCP Optimization Tips:\n"
        "• Right-size Compute Engine VMs using recommendations.\n"
        "• Commit to Sustained Use or CUDs (Committed Use Discounts).\n"
        "• Migrate unused disks to Nearline/Coldline storage.\n"
        "• Review BigQuery active tables and scheduled queries.\n"
        "• Remove orphaned load balancers and static IPs.\n"
    )
