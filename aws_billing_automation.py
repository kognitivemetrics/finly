from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Initialize the Chrome driver
driver = webdriver.Chrome()

# Open AWS login page
driver.get("https://signin.aws.amazon.com/console")

# Enter your AWS account credentials
username = driver.find_element(By.ID, "resolving_input")
username.send_keys("your_aws_username")
username.send_keys(Keys.RETURN)

time.sleep(2)  # Wait for password field to load

password = driver.find_element(By.ID, "password")
password.send_keys("your_aws_password")
password.send_keys(Keys.RETURN)

time.sleep(5)  # Wait for login to complete

# Navigate to the Billing Dashboard
driver.get("https://console.aws.amazon.com/billing/home#/dashboard")

time.sleep(5)  # Wait for the billing dashboard to load

# Extract billing information
# Note: The actual element IDs/classes may vary; you'll need to inspect the page to find the correct selectors
billing_info = driver.find_element(By.CLASS_NAME, "your_billing_info_class").text
print("Current AWS Billing Info:", billing_info)

# Close the browser
driver.quit()
