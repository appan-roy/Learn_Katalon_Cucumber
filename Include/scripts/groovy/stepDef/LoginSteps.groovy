package stepDef
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords

import internal.GlobalVariable

import MobileBuiltInKeywords as Mobile
import WSBuiltInKeywords as WS
import WebUiBuiltInKeywords as WebUI

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When


class LoginSteps {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("User navigates to login page")
	def User_navigates_to_login_page(){
		
		WebUI.openBrowser('')
		
		WebUI.navigateToUrl('https://katalon-demo-cura.herokuapp.com/')
		
		WebUI.click(findTestObject('Object Repository/CURA Healthcare/Page_CURA Healthcare Service/a_Make Appointment'))
		
	}

	@When("User enters username and password")
	def userEntersCredentials(){
		
		WebUI.setText(findTestObject('Object Repository/CURA Healthcare/Page_CURA Healthcare Service/input_Username_username'),
			'John Doe')
		
		WebUI.setText(findTestObject('Object Repository/CURA Healthcare/Page_CURA Healthcare Service/input_Password_password'),
			'ThisIsNotAPassword')
		
	}

	@And("Click on login button")
	def clickLoginButton(){
		
		WebUI.click(findTestObject('Object Repository/CURA Healthcare/Page_CURA Healthcare Service/button_Login'))
		
	}
	
	@Then("User is navigated to home page")
	def navigateToHomePage(){
		
		WebUI.verifyElementPresent(findTestObject('Object Repository/CURA Healthcare/Page_CURA Healthcare Service/button_Book Appointment'),
			5)
		
		WebUI.closeBrowser()
		
	}
	
}
