const { clear } = require('console');
const { ExpectedConditions, element, browser } = require('protractor');
const { waitForInvisible, isElementDisplayed } = require('../base/Actions');
const actions = require('../base/Actions');
const locators = require('../locators/Locators');
const pagem = require("../microsoftPageObjects/PageMicrosoft.js");


beforeAll( function () {
    pagem.openUrl();
});

function WindowsPage () {


    /**
     * 
     * 
     * @description Windows Page Validation
     * 
     */

    this.unFoldedDropDownMenu = element(by.css(UNFOLDED_DROP_DOWN_MENU));
    this.winDropDownMenu = element.all(by.css(WINDOWS_DROPED_DOWN_MENU));
    this.searchIcon = element(by.css(SEARCH_ICON));
    this.searchDeployedInputField = element(by.css(SEARCH_DEPLOYED_INPUT_FIELD));
    this.visualStudioContent1 = element.all(by.xpath(VISUAL_STUDIO_CONTENT1));
    this.visualStudioContent2 = element.all(by.xpath(VISUAL_STUDIO_CONTENT2));
    this.visualStudioContent3 = element.all(by.xpath(VISUAL_STUDIO_CONTENT13));
    this.firstVisualOption = element(by.xpath(FIRST_VISUAL_OPTION));
    this.keepOnUS = element(by.css(KEEP_IN_US_SITE));
    this.addToCartButon = element(by.css(ADD_TO_CART_BUTTON));
    this.qtyDropDownmenu = element(by.xpath(QTY_DROP_DOWN_MENU));
    this.qtYTwenty = element(by.xpath(QTY_TWENTY));
    this.totalVisualStudioPackage = element(by.xpath(TOTAL_VISUAL_STUDIO_PACKAGE));
    
    
    




    this.validateAndPrintAllWin10Options = () => {
        actions.clickToElement(this.unFoldedDropDownMenu);
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(this.winDropDownMenu), 5000, 'Element taking too long to appear in the DOM');
        this.winDropDownMenu.getAttribute("innerText").then(function(menu){
            console.log(menu);
        }) 
            
        }
    
    this.searchForVisualStudio = () => {
        browser.sleep(3000);
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(this.searchDeployedInputField), 5000, 'Element taking too long to appear in the DOM');
        actions.clickToElement(this.searchIcon);
        console.log('>>>> Searching for Visual Studio App')
        actions.enterText(this.searchDeployedInputField, "Visual Studio");
        actions.clickToElement(this.searchIcon);
        browser.sleep(3000);
        actions.clickToElement(this.keepOnUS);

        if(this.visualStudioContent1.isDisplayed() ) {
            console.log('The Visual Studio Content is present')
            
        } else {
            console.log("Visual Studio Content is not present " + "Try with another Search Criteria")
        }

    }

    this.printThethreeResultsFromVisualStudioSearch = () => {
        itemsArray = [this.visualStudioContent1, this.visualStudioContent2, this.visualStudioContent3];
        this.visualStudioContent1.getAttribute("innerText").then(function(item1){
            console.log(item1);
        })

        this.visualStudioContent2.getAttribute("innerText").then(function(item2){
            console.log(item2);
        })

        this.visualStudioContent3.getAttribute("innerText").then(function(item3){
            console.log(item3);
        })
        
    }

    this.validateVsEnterPriseAndListedPrices  = () =>{
        this.visualStudioContent1.getAttribute("innerText").then(function(item1){

        
            this.visualStudioEnterprise = VISUAL_STUDIO_ENTERPRISE;
            this.addedToCartItemPrice = ADDED_TO_CART_PRICE;
            console.log(this.addedToCartItemPrice);
            console.log(item1);
            if(item1 == this.visualStudioEnterprise){
                console.log("Both Qtys are Equals " + item1 + " " + " " + this.visualStudioEnterprise);
            } else [
                console.log('Not Equals')
            ]
    
            })
        actions.clickToElement(this.firstVisualOption);
        browser.sleep(3000);
        this.removeItem = element(by.xpath(SIGNUP_BLOCKER)).sendKeys(protractor.Key.ESCAPE);

        browser.sleep(5000);
        actions.clickToElement(this.addToCartButon);
        browser.sleep(9000);
    }

    this.validateAddTwentyItemsToCartToEqualsUnit = () => {
        actions.clickToElement(this.qtyDropDownmenu);
        browser.sleep(4000);
        actions.clickToElement(this.qtYTwenty);
        browser.sleep(4000);

        var resultOfUnitPrice = 20 * 1199.00;
        this.totalVisualStudioPackage.getAttribute("innerText").then(function(vsp){
         var result1 = console.log(resultOfUnitPrice.toString());
           var result2 = console.log(vsp);
            if(result1 === result2) {
                console.log("The Qtys are equals" + " " + vsp + " = " + " " + resultOfUnitPrice );
            } else {
                console.log('The Qtys are not equls  >>> Check in the UI for more if there is an issue');
            }
        })

    }

    
}
module.exports = new WindowsPage();