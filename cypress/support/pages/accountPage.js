//Classe Account que vai ser instanciado no e2e/cadastro de Admin
//Criação da Classe Account para criar um Admin

import { faker } from '@faker-js/faker/locale/pt_BR';
import AccountElements from '../elements/accountElements';

const accountElements = new AccountElements(); 
const employeeName = ('Jasmine Morgan');
const userName = ('Teste Automação');
const password = faker.internet.password(8, false, /\w/, '12#Aa');


class LoginPage {
    submitMenu() {
        cy.get(accountElements.menuAdmin()).should('be.visible').click();
    }
    buttonSubmitAdmin() {
        cy.get(accountElements.buttonAddAdmin()).should('be.visible').click();
    }
    addUser() {
        cy.get(accountElements.userRole()).type('{downArrow}{enter}');
        cy.get(accountElements.employeeName()).type(employeeName).wait(3000).type('{downArrow}{enter}');
        cy.get(accountElements.status()).type('{downArrow}{enter}');
        cy.get(accountElements.userName()).should('be.visible').type(userName);
        cy.get(accountElements.password()).should('be.visible').type(password);
        cy.get(accountElements.confirmPassword()).should('be.visible').type(password).invoke('text');
        //cy.clearAllLocalStorage();
      }
    submitSave() {
        cy.get(accountElements.buttonSave()).should('be.visible').click();
        cy.wait (5000)
      }
    }

export default LoginPage;