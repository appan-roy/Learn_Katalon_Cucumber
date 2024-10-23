$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Login.feature");
formatter.feature({
  "name": "Login feature to the CURA Healthcare",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test login scenario with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User navigates to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.User_navigates_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.userEntersCredentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.navigateToHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/LoginDDT.feature");
formatter.feature({
  "name": "Login feature to the CURA Healthcare Services",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test login scenario with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigates to CURA login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters the \u003cusername\u003e and the \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User is navigated to the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "John Doe",
        "ThisIsNotAPassword"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test login scenario with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigates to CURA login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsDDT.User_navigates_to_CURA_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the John Doe and the ThisIsNotAPassword",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsDDT.userEntersCredentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsDDT.clickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsDDT.navigateToHomePage()"
});
formatter.result({
  "status": "passed"
});
});