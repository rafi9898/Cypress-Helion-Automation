/// <reference types="cypress" />
import SearchBarPage from "../../support/pages/SearchBar/SearchBarPage";
const pageUrl = require("../../fixtures/pageUrl");
const searchData = require("../../fixtures/searchData");


describe("E2E Search Bar - The incorrect search product", () => {

    it("Should click on search icon without enter search phrase", () => {
        cy.openHomePage();
        SearchBarPage.searchIcon.click();
        cy.url().should("eq", pageUrl.homeUrl)
    })

    it("Should type incorrect product title and click on search icon", () => {
        SearchBarPage.typeSearchValue(searchData.incorrectSearchValue);
        SearchBarPage.searchIcon.click();
        cy.wait(500)
        cy.url().should("eq", pageUrl.incorrectSearchUrl)
    })

}) 