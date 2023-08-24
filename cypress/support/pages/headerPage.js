//Classe Header que vai ser instanciado no e2e
//Criação da Classe Header para realizaro logout da conta

import HeaderElements from '../elements/headerElements';

const headerElements = new HeaderElements();

class Header {
    disconnectAccount() {
      cy.wait (3000)
      cy.get(headerElements.profileMenu ()).click();
      cy.get(headerElements.disconnectAccount()).click();
    }
}
export default Header;    