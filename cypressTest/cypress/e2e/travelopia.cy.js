describe('Form Submission and Dashboard Test', () => {
    beforeEach(() => {
        cy.visit('https://travelopia-take-home-test.vercel.app/');
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
        cy.get('table td').should('exist');
        cy.get('table tr').should('exist');
     
      })
  });
  describe('Pagination Test', () => {
    beforeEach(() => {
      cy.visit('https://travelopia-take-home-test.vercel.app/dashboard');
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