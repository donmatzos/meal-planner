/// <reference types="cypress" />

describe('meal-planner-test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads the components correctly', () => {
    cy.get('.App').should('exist')
    cy.get('.App-header').should('exist')
    cy.get('.card').should('exist')
  })

})
