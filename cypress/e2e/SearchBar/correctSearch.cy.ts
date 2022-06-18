/// <reference types="cypress" />
import SearchBarPage from "../../support/pages/SearchBar/SearchBarPage";
const pageUrl = require("../../fixtures/pageUrl");
const searchData = require("../../fixtures/searchData");
const productDetails = require("../../fixtures/productDetails");
import ProductPage from "../../support/pages/ProductPage/ProductPage";


describe("E2E Search Bar - The correct data", () => {

    it("Should type correct value and verify result in popup", () => {
        cy.openHomePage();
        SearchBarPage.typeSearchValue(searchData.searchValue);
        SearchBarPage.suggestListIsVisible();
        SearchBarPage.verifyNumberOfResults(searchData.expectedCountInPopup);
        SearchBarPage.verifyFirstTitle(searchData.firstBookTitle)
    })

    it("Should click on first book and verify details", () => {
        SearchBarPage.clickOnFirstBook();
        cy.url().should("eq", pageUrl.firstBookUrl)
        ProductPage.bookTitle.should("have.text", productDetails.productTitle)
        ProductPage.bookAuthorName.should("have.text", productDetails.authorName)
        ProductPage.verifyBookPrice(productDetails.productPrice)
    })

}) 