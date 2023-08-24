import LoginPage from "../support/pages/loginPage"
import AccountPage from "../support/pages/accountPage"
import SearchPage from '../support/pages/searchPage';
import DeletePage from "../support/pages/deletePage";
import HeaderPage from '../support/pages/headerPage';

const loginPage = new LoginPage;
const accountPage = new AccountPage;
const searchPage = new SearchPage;
const deletePage = new DeletePage;
const headerPage = new HeaderPage;

//BDD do e2e em que entra no site do Admin, faz login no Admin, realiza o cadastro, busca, exclusão do Admin e depois realiza o logout 
describe('Automação e2e para desafio RD', () => {
    it('Dado que o usuário acesse a página inicial do Admin', () => {
        loginPage.go();
    })

    it('Quando realizar o login para acessar a página', () => {
        loginPage.fillLoginFields();
        loginPage.submitLogin();
    })

    it('E realizar o cadastro de Admin com sucesso', () => {
        accountPage.submitMenu();
        accountPage.buttonSubmitAdmin();
        accountPage.addUser();
        accountPage.submitSave();
      })

    it('E realizar a busca do mesmo usuário que foi cadastrado', () => {
        searchPage.searchAD();
        searchPage.submitSearch();
    })

    it('E realizar a exclusão do mesmo usuário que foi cadastrado', () => {
        deletePage.submitDelete();
        deletePage.submitDeleteModal();
    })
            
    it('Então o usuário poderá realizar o logout', () => {
        headerPage.disconnectAccount();
    })

})

                

     