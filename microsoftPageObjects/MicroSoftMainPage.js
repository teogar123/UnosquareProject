const { ExpectedConditions, element } = require('protractor');
const { waitForInvisible, isElementDisplayed } = require('../base/Actions');
const actions = require('../base/Actions');
const locators = require('../locators/Locators');
const pagem = require("../microsoftPageObjects/PageMicrosoft.js")


beforeAll( function () {
    pagem.openUrl();
});


function MicroSoftMainPage() {

    this.microSoftMainMenu = element.all(by.xpath(MENU_ITEMS));
    this.windowsItem = element(by.css(WINDOWS_ITEM));
    

    /**
     * 
     * 
     * @description Microsoft Page Validation
     * 
     */

    this.microsofMenuItemsValidation = () => {
        this.microSoftMainMenu.getAttribute('innerText').then(function(text){
            console.log(text);
            menuList = ["'Microsoft 365','Office','Windows','Surface','Xbox','Deals','Support',"]
            if (text.count === menuList.count){
                console.log("The Menu Items are present and correct");
            } else {
                console.log('Check with another Selector')
            }

            //expect(text).toEqual(7);
        });
            
        
        console.log('yes');
        browser.sleep(5000);
    }
    
    this.goToWindowsPage = () => {
        if(this.windowsItem.isDisplayed()) {
            console.log("The the windows Item is Displayed and is user interactuable >>> Proceed to CLick it!!!" + this.windowsItem.click());
        } else {
            console.log("Is not Displayed")
        }
        
    }

    
}
module.exports = new MicroSoftMainPage();
