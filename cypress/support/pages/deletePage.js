//Classe Delete que vai ser instanciado no e2e
//Criação da Classe Delete para deletar o usuário que foi cadastrado

import DeleteElements from '../elements/deleteElements';

const deleteElements = new DeleteElements();

class DeletePage {
    submitDelete() {
        cy.wait (3000)
        cy.get(deleteElements.buttonDelete()).should('be.visible').click({ force: true });
    }
    submitDeleteModal () {
        cy.wait (3000)
        cy.get(deleteElements.buttonDeleteModal()).should('be.visible').click({ force: true });
    }
}
export default DeletePage;