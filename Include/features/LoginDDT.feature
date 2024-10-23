Feature: Login feature to the CURA Healthcare Services

  Scenario Outline: Test login scenario with valid credentials
    Given User navigates to CURA login page
    When User enters the <username> and the <password>
    And Click on the login button
    Then User is navigated to the home page

    Examples:
    	| username | password |
    	| John Doe | ThisIsNotAPassword |