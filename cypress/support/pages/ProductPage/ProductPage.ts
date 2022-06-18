class ProductPage {
    get bookTitle() {
        return cy.get(`span[itemprop="name"]`)
    }

    get bookAuthorName() {
        return cy.get("dl.author a")
    }

    get bookPrice() {
        return cy.get("span#cena_d")
    }

    get addToBasketBtn() {
        return cy.get("a#addToBasket_szteop")
    }

    async verifyBookPrice(price: number) {
        this.bookPrice.invoke("text").then(priceValue => {
            const bookPriceValue = parseFloat((priceValue).replace(",", "."));
            cy.wrap(bookPriceValue).should("be.greaterThan", 0);
            cy.wrap(bookPriceValue).should("eq", price)
        })
    }

}

export default new ProductPage();