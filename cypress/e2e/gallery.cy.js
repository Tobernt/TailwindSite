describe('UI gallery flows', () => {
  it('navigates from home to gallery and exercises modal and toggle', () => {
    cy.visit('/index.html');

    cy.contains('a', 'Explore the UI gallery', { matchCase: false }).click();

    cy.url().should('include', '/gallery.html');

    cy.get('[data-open-modal]').should('be.visible').click();
    cy.get('[data-modal-overlay]').should('be.visible');
    cy.get('[data-modal-dialog]').should('have.attr', 'aria-hidden', 'false');
    cy.get('[data-close-modal]').should('be.focused');

    cy.get('[data-toggle]').as('toggle');
    cy.get('@toggle').should('have.attr', 'aria-pressed', 'false');
    cy.get('@toggle').click();
    cy.get('@toggle').should('have.attr', 'aria-pressed', 'true');
    cy.get('[data-toggle-knob]').should('have.class', 'bg-emerald-300');
  });
});
