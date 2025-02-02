/// <reference types="cypress"/>
import {faker} from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => 
{
    beforeEach(() => 
    {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')    
    });

    it('Deve verificar se o e-mail está cadastrado', () => 
    {
        cy.get('#reg_email').type('ebacqa@ebacqa.com.br')
        cy.get('#reg_password').type('ebacqa')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve completar o cadastro com sucesso', () => 
    {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())

        //cy.wait(5000)

        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it('Deve completar o cadastro com sucesso - Usando variáveis', () => 
    {
        var email = faker.internet.email()
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()

        //var nome = faker.person.firstName()
        //var email = faker.internet.email(nome)
        //var sobrenome = faker.person.lastName()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('teste@123')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)

        //cy.wait(5000)

        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});