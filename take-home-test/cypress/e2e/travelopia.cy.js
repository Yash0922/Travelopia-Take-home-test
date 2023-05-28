describe('Form Submission Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
      });

      it('Make to plan a journey', () => {

        cy.get('#Name_id').type('Yash');
        cy.get('#Email_id').type('Yashkumarpal987@gmail.com');
        cy.get('#Destination_id').select('India');
        cy.get('#Number_of_Traveller_id').clear().type(2);
        cy.get('#budgetPerPerson_id').type(3000);
        cy.get('#submit_id').click();

        cy.url().should('include', '/dashboard');

        // Verify the stored data on the dashboard page
       
      
  });
 

  });
  describe('Dashboard Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/dashboard');
    });
    it('should data present in dashboard',() => {
      cy.get('table td').should('exist');
      cy.get('table tr').should('exist');

      let currentPage;

      cy.get('#totalPages')
          .invoke('text')
          .then((currentPageText) => {
              currentPage = parseInt(currentPageText, 10);
              cy.log('Current Page: ' + currentPage);
          })
          .then(() => {

              for (let i = 1; i < currentPage; i++) {
                  cy.get("#next").click();
              }
          });






      cy.get('tbody').contains('Yash');
      cy.get('tbody').contains('Yashkumarpal987@gmail.com');
      cy.get('tbody').contains('India');
      cy.get('tbody').contains(2);
      cy.get('tbody').contains(3000);
   
    })
    })
  describe('Pagination Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/dashboard');
    });
  
    it('should navigate through pages using pagination', () => {
      // Initially, check if the first page is active
      cy.get('#current').should('contain', '1');
  
      // Simulate clicking on the next page button
      cy.get('#next').click();
  
      // Verify if the second page is active
      cy.get('#current').should('contain', '2');
  
    
  
      // Simulate clicking on the previous page button
      cy.get('#prev').click();
  
      // Verify if the second page is active again
      cy.get('#current').should('contain', '1');
    });
  });