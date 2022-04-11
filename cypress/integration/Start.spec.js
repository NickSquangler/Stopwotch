// sample.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('functionality of the start button', () => {
    it('starts the timer', () => {
        cy.visit('stopwatch.html')
        let startTime = cy.get('#stopwatch')
        cy.get('#buttons > li > #start').click()
        let currentTime = cy.get('#stopwatch')
        expect(startTime).not.to.equal(currentTime)
    })
})
describe('functionality of the reset button', () => {
    it('resets the timer', () => {
        cy.visit('stopwatch.html')
        cy.get('#stopwatch')
            .invoke('text')
            .then((startTime) => {

                cy.get('#buttons > li > #start').click()
                cy.wait(2000)
                cy.get('#buttons > li > #reset').click()

                cy.get('#stopwatch')
                    .invoke('text')
                    .should((currentTime) => {
                        expect(startTime.trim()).to.eq(currentTime.trim())
                    })
            })
    })
})