/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => 
{
    beforeEach(() => 
    {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => 
    {
        //cy.get('.product-block').first().click()
        //cy.get('.product-block').last().click()
        //cy.get('.product-block').eq(3).click()

        //cy.get('.block-inner').first().click()
        //cy.get('.block-inner').last().click()
        //cy.get('.block-inner').eq(3).click()
            
        cy.get('.products > .row')
            .contains('Aether Gym Pant')
            .click()
        
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});