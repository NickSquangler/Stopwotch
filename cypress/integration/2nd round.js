// 2nd round.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('right click testing', () => {
    it('right clicks the start button', () => {
        expect(true).to.equal(true)
        cy.visit('stopwatch.html')
        cy.get('#buttons').rightclick('center')
    })
})
describe('right click testing', () => {
    it('right clicks the reset button', () => {
        expect(true).to.equal(true)
        cy.visit('stopwatch.html')
        cy.get('#buttons').rightclick('right')
    })
})
describe('right click testing', () => {
    it('right clicks the start button', () => {
        expect(false).to.equal(false)
        cy.visit('stopwatch.html')
        cy.get('#buttons').rightclick('left')
    })
})