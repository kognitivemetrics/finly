*** Settings ***
Library           RPA.Browser.Selenium
Library           OperatingSystem

*** Variables ***
${LOGIN_URL}      http://localhost:5000
${USERNAME}       demo
${PASSWORD}       password123

*** Tasks ***
Scrape Fake AWS Bill
    Open Available Browser    ${LOGIN_URL}
    Input Text    name:username    ${USERNAME}
    Input Text    name:password    ${PASSWORD}
    Click Button    Login
    Wait Until Page Contains Element    css:.billing-amount    timeout=5s
    ${bill}=    Get Text    css:.billing-amount
    Log    Bill Retrieved: ${bill}
    Create File    output/aws_bill.json    {"AWS Total": "${bill}"}
    Close Browser
