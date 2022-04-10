// sample.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('functionality of the start button', () => {
    it('touches the button', () => {
        expect(true).to.equal(true)
        cy.visit('stopwatch.html')
        cy.get('#buttons').click('center')
    })
})
describe('functionality of the reset button', () => {
    it('touches the button', () => {
        expect(true).to.equal(true)
        cy.visit('stopwatch.html')
        cy.get('#buttons').click('right')
    })
})
