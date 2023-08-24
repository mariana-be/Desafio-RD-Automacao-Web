//Classe Search que vai ser instanciado no e2e
//Criação da Classe Search para realizar a busca do Admin 

import SearchElements from '../elements/searchElements';

const searchElements = new SearchElements();
const searchAdmin = ('Teste Automação')

class SearchPage {
    searchAD(){
        cy.get(searchElements.searchUserName()).should('be.visible').wait(2000).type(searchAdmin);
    }
    submitSearch() {
        cy.wait (3000)
        cy.get(searchElements.buttonSearch()).should('be.visible').click({ force: true });
    }
}
export default SearchPage;