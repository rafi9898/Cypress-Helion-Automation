class SearchBarPage {
    get searchInput() {
        return cy.get("input#inputSearch")
    }

    get suggestBox() {
        return cy.get("form#szukanie div.suggest-list");
    }

    get suggestElements() {
        return cy.get("form#szukanie ol.item-list").find("li")
    }

    get searchIcon() {
        return cy.get("button").contains("Szukaj")
    }

    get notFoundText() {
        return cy.get("div.not-found")
    }

    typeSearchValue(value: string) {
        this.searchInput.type(value, {delay: Cypress.env("typeDelay")})
    }

    suggestListIsVisible() {
        this.suggestBox.should("be.visible")
    }

    verifyNumberOfResults(count: number) {
        this.suggestElements.should("have.length", count + 1)
    }

    verifyFirstTitle(titleValue: string) {
        this.suggestElements.first().then(item => {
            cy.wrap(item).find("strong").should("have.text", titleValue)
        })
    }

    clickOnFirstBook() {
        this.suggestElements.first().click();
    }
}

export default new SearchBarPage();

