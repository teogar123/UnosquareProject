const pagem = require('../microsoftPageObjects/PageMicrosoft.js');
const micro = require('../microsoftPageObjects/MicroSoftMainPage.js');
const winpage = require('../microsoftPageObjects/WindowsPage');

beforeAll( function () {
    pagem.openUrl();
});

describe('Validate Microsoft Page', function () {
    it('Valite Microsoft Page', function () {
        micro.microsofMenuItemsValidation();
       
    })

    it('Go to Windows Page', function (){
        micro.goToWindowsPage();
    })

    it('Validate and Print all Itmes in Win 10 Dropdown Menu', function (){
        winpage.validateAndPrintAllWin10Options();
    })

    it('Search for Visual Studio on Search Item', function(){
        winpage.searchForVisualStudio();
    })

    it('Print the three results from the Visual Studio Search Criteria', function(){
        winpage.printThethreeResultsFromVisualStudioSearch();    
    })

    it('Compare the price of the two elements', function(){
        winpage.validateVsEnterPriseAndListedPrices();    
    })

    it('Compare the Qty of 20 units', function(){
        winpage.validateAddTwentyItemsToCartToEqualsUnit();
    })
})