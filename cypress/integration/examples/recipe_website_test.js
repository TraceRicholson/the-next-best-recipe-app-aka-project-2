describe('Recipe Website Tests', () => {
  it('Visits the Recipe Homepage', () => {
    cy.visit('http://localhost:3000')
  })

  it('Can access server data and log it to the Cypress browswer console', () => {
    cy.request('http://localhost:5001/recipes')
  })

  it('Visits the Recipes Page', () => {
    cy.visit('http://localhost:3000/recipes')
  })

  it('Visits the Favorites Page', () => {
    cy.visit('http://localhost:3000/favorites')

  })

  it('Can click on a recipe to view the full information', () => {
    cy.visit('http://localhost:3000/recipes')

  })

  it('PENDING', () => {
    cy.visit('http://localhost:3000/recipes')

  })

  it('PENDING', () => {
    cy.visit('http://localhost:3000/recipes')

  })

  it('PENDING', () => {
    cy.visit('http://localhost:3000/recipes')

  })
})

