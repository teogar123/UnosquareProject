const Locators = function () {
    /**
     * 
     * 
     * @description Locators for Microsoft Project
     * 
     * 
     */

     MENU_ITEMS = '//*[@id="uhf-g-nav"]/ul/li[*]';
     WINDOWS_ITEM = '#shellmenu_2';
     UNFOLDED_DROP_DOWN_MENU = '#c-shellmenu_55';
     WINDOWS_DROPED_DOWN_MENU ='body.en-us.Mac:nth-child(2) div.uhf header.c-uhfh.context-uhf.c-sgl-stck.c-category-header.js div.theme-light.js-global-head.f-closed.global-head-cont div.c-uhfh-gcontainer-st nav.c-uhfh-gnav:nth-child(7) ul.js-paddle-items li.nested-menu.uhf-menu-item:nth-child(2) div.c-uhf-menu.js-nav-menu > ul:nth-child(2)';
     VISUAL_STUDIO_ENTERPRISE = '$5,999.00';
     ADDED_TO_CART_PRICE = '$5,999.00';
     SIGNUP_BLOCKER = '//*[@id="email-newsletter-dialog"]/div[3]';
     SEARCH_ICON = '#search';
     SEARCH_DEPLOYED_INPUT_FIELD = '#cli_shellHeaderSearchInput';
     VISUAL_STUDIO_CONTENT1 = "//span[contains(text(),'$5,999.00')]";
     VISUAL_STUDIO_CONTENT2 = "//span[contains(text(),'$2,169.00')]";
     VISUAL_STUDIO_CONTENT13 = "//span[contains(text(),'$499.00')]";
     FIRST_VISUAL_OPTION = '//body/div[2]/section[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[1]/div[1]/a[1]/div[1]/picture[1]/img[1]';
     KEEP_IN_US_SITE = '#R1MarketRedirect-close';
     ADD_TO_CART_BUTTON = '#buttonPanel_AddToCartButton';
     QTY_DROP_DOWN_MENU = "//body/section[@id='primaryArea']/div[@id='primaryR1']/div[@id='Onestore-IsomorphicApp-vqo1q35']/div[@id='store-cart-root']/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/select[1]";
     QTY_TWENTY = '//*[@id="store-cart-root"]/div/div/div/section[1]/div/div/div/div/div/div[2]/div[2]/div[1]/select/option[20]';
     TOTAL_VISUAL_STUDIO_PACKAGE = "//body/section[@id='primaryArea']/div[@id='primaryR1']/div[@id='Onestore-IsomorphicApp-vqo1q35']/div[@id='store-cart-root']/div[1]/div[1]/div[1]/section[2]/div[1]/div[1]/div[2]/div[1]/span[1]";
}
module.exports = new Locators();