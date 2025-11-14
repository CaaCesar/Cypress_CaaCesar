describe('Login', () =>{
    it('Realizar Login com sucesso', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com');
        // Act
        cy.get('[data-test="username"]').type('standard_user');

        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        
        cy.screenshot('Login com Sucesso')

        // Assert
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    });
    
    it('Realizar login informando credenciais inválidas', () =>{
        // Arrange
        cy.visit('https://www.saucedemo.com');
        // Act
        cy.get('[data-test="username"]').type('invalido');

        cy.get('[data-test="password"]').type('1234');

        cy.get('[data-test="login-button"]').click();
        
        //Assert
        cy.get('[data-test="error"]')
            .should(
                'contain.text',
                'Username and password do not match any user in this service'
            )
        cy.screenshot('Mensagem de erro de Login!')
    });
}) 