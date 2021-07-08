describe('Recipe Website Tests', () => {
  it('Visits the website homepage', () => {
    cy.visit('http://localhost:3000')
  })

  it('Can access server data and log it to the Cypress browswer console', () => {
    cy.request('http://localhost:5001/recipes')
  })

  it('Visits the recipe homepage by clicking on the robot picture', () => {
    cy.visit('http://localhost:3000')
    .get("[alt='A cartoon robot waiter']")
    .click()
    .window()
    .contains('Curry')
  })

  it('Visits the Recipes Page', () => {
    cy.visit('http://localhost:3000/recipes')
  })

  it('Can click on a recipe to view the full information', () => {
    cy.visit('http://localhost:3000/recipes')
    .contains('PB&J Overnight Oats')
    .click()
    .window()
    .contains('mason jar')

  })

  it('Visits the Favorites Page', () => {
    cy.visit('http://localhost:3000/favorites')

  })

  it('Should be able to add a recipe to favorites', () => {
    cy.visit('http://localhost:3000/recipes')
    .get('[id = 2]')
    .contains('Add to Favorites')
    .click()
    cy.visit('http://localhost:3000/favorites')
    .window()
    .contains('Curry Noodle')

  })

  it('Should be able to remove a recipe from favorites', () => {
    cy.visit('http://localhost:3000/favorites')
    .get('[id = 2]')
    .contains('Remove from Favorites')
    .click()
    .should('not.exist')
  })

  it('PENDING', () => {
    cy.visit('http://localhost:3000/recipes')

  })
})

