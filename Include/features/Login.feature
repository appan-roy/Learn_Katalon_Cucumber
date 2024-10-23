Feature: Login feature to the CURA Healthcare

  Scenario: Test login scenario with valid credentials
    Given User navigates to login page
    When User enters username and password
    And Click on login button
    Then User is navigated to home page
