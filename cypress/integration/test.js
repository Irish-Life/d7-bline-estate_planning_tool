describe('Testing web pages', function () {
  it('Tests a dependent who is over 21', () => {
    cy.visit('http://localhost/estateplanner/')
      .get('#logo').should('be', 'visible');

    cy.get('#get-started').click();
    cy.get('#name').type("Jonni Bissell");
    cy.get('#info-next').click();
    cy.get('#family-home').type('500000');
    cy.get('#post-retire').type('500000');
    cy.get('#estate-next').click();
    cy.get('#add-beneficiary').click();

    cy.get('#ben-name').type("Jimbob");
    cy.get('#ben-age').type("25");
    cy.get('#ben-rel').select("Child");

    cy.get('#heading-5-1').click();
    cy.get('#ben-residence').type("500000");
    cy.get('#ben-pensions-amrf').type("500000");
    cy.get('#heading-1-1').click();
    cy.get('#ben-tax-lib').should('have.value', '209400');
  })

  it('Tests a dependent who is exactly 21', () => {
    cy.visit('http://localhost/estateplanner/')
      .get('#logo').should('be', 'visible');

    cy.get('#get-started').click();
    cy.get('#name').type("Jonni Bissell");
    cy.get('#info-next').click();
    cy.get('#family-home').type('500000');
    cy.get('#post-retire').type('500000');
    cy.get('#estate-next').click();
    cy.get('#add-beneficiary').click();

    cy.get('#ben-name').type("Jimbob");
    cy.get('#ben-age').type("21");
    cy.get('#ben-rel').select("Child");

    cy.get('#heading-5-1').click();
    cy.get('#ben-residence').type("500000");
    cy.get('#ben-pensions-amrf').type("500000");
    cy.get('#heading-1-1').click();
    cy.get('#ben-tax-lib').should('have.value', '209400');
  })

  it('Tests a dependent who is under 21', () => {
    cy.visit('http://localhost/estateplanner/')
      .get('#logo').should('be', 'visible');

    cy.get('#get-started').click();
    cy.get('#name').type("Jonni Bissell");
    cy.get('#info-next').click();
    cy.get('#family-home').type('500000');
    cy.get('#post-retire').type('500000');
    cy.get('#estate-next').click();
    cy.get('#add-beneficiary').click();
    cy.get('#ben-name').type("Jimbob");

    cy.get('#ben-age').type("20");
    cy.get('#ben-rel').select("Child");

    cy.get('#heading-5-1').click();
    cy.get('#ben-residence').type("500000");
    cy.get('#ben-pensions-amrf').type("500000");
    cy.get('#heading-1-1').click();
    cy.get('#ben-tax-lib').should('have.value', '224400');
  })
})
