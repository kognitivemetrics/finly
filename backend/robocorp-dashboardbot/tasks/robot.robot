*** Settings ***
Library    RPA.Browser.Selenium
Library    RPA.JSON
Library    OperatingSystem
Library    Collections
Library    String

*** Tasks ***
Extract Card Values To JSON
    Open Available Browser    http://localhost:3001    maximized=true
    Wait Until Page Contains Element    //div[contains(@class, 'MuiCardContent-root')]    10s

    ${cards}=    Get WebElements    //div[contains(@class, 'MuiCardContent-root')]
    ${data}=    Create Dictionary

    FOR    ${card}    IN    @{cards}
        ${text}=    Get Text    ${card}
        ${text}=    Strip String    ${text}
        ${parts}=    Split String    ${text}    \n
        ${label}=    Get From List    ${parts}    0
        ${value}=    Get From List    ${parts}    1
        Set To Dictionary    ${data}    ${label}    ${value}
    END

    ${json}=    Evaluate    __import__('json').dumps(${data}, indent=2)
    Create File    output/llm_data.json    ${json}

    Close Browser
