import subprocess

def get_bill_with_robot(query=""):
    try:
        result = subprocess.run(
            ["rcc", "run", "--robot", "robocorp-billbot/robot.yaml"],
            capture_output=True,
            text=True,
            check=True
        )
        for line in result.stdout.splitlines():
            if "Bill Retrieved:" in line:
                return line.strip().split("Bill Retrieved: ")[-1]
        return "Could not find bill in robot output."
    except subprocess.CalledProcessError as e:
        return f"Robot failed: {e.stderr}"
