/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://ua-pl.com/pomoc')
    })
    it('sprawdzenie maila admin@ua-pl.com', () => {

        cy.xpath("/html/body/div[1]/div/div[3]/div/center/span[2]").should('have.text', ' admin@ua-pl.com')
    })
    it('sprawdzenie telefonu', () => {

        cy.xpath("/html/body/div/div/div[2]/div/div[1]/div[2]/div/div/h6/a[2]").should('have.text', 'Tel. 22 222 222')
    })
    it('sprawdzenie linka T-shirty', () => {

        cy.xpath("/html/body/div/div/div[2]/div/div[1]/div[3]/a/div/div/h6/ul/li[1]").should('have.text', 't-shirty').click()
    }) 
    // do zrobienia 7 testów  dowolnych   

    it('sprawdzenie tytułu', () => {

        cy.xpath("/html/body/div[1]/div/div[2]/div/div[1]/div[1]/h2").should('have.text', 'Dworzec Centralny')
    })

    it('sprawdzenie tekstu', () => {

        cy.xpath("/html/body/div/div/div[1]/div[2]/div/span/a/span/b").should('have.text', 'Saturday 19 March 00:55')

    })

    // it('sprawdzenie linka Mam leki ', () => {

    //     cy.xpath("/html/body/div/div/div[2]/div/div[1]/div[7]/a/div").should('have.text', 'Mam leki').click()
    
    it('sprawdzenie linka Mam pościel', () => {

        cy.xpath("/html/body/div/div/div[2]/div/div[2]/div[6]/a/div/div/h6/ul/li[1]").should('have.text', 'Mam pościel').click()
    }) 

    it('sprawdzenie tekstu powiedz co masz', () => {

        cy.xpath("/html/body/div/div/div[1]/div[2]/center/h2/span/b").should('have.text', 'Powiedz co masz')
    })


})