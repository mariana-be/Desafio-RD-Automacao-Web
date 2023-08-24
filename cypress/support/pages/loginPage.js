//Classe Login que vai ser instanciado no e23
//Criação da Classe Login para realizar a conexão no Admin

import LoginElements from '../elements/loginElements';

const loginElements = new LoginElements();
const username = ('Admin');
const password = ('admin123')


class LoginPage {
    go() {
        cy.visit('/')
    }
    fillLoginFields() {
        cy.get(loginElements.userField()).should('be.visible').clear().type(username);
        cy.get(loginElements.passField()).should('be.visible').clear().type(password);
      }
    submitLogin() {
        cy.get(loginElements.signinButton()).should('be.visible').click();
      }
    }

export default LoginPage;   