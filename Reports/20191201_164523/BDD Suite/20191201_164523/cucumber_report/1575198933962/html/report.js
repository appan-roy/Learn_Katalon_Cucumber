$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Softwares/My PC Apps/Katalon Studio/Workspace/LearnCucumber/Include/features/Login.feature");
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
});