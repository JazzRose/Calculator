describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should be able to use operator buttons and display result', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','12')
  })

  it('should be able to use add button and display result', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','8')
  })

  it('should be able to use subtract button and display result', () => {
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','6')
  })

  it('should be able to use multiply button and display result', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','9')
  })

  it('should be able to use divide button and display result', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','4')
  })

  it('should be able to display multiple chained operators', () => {
    cy.get('#number3').click();
    cy.get('#operator-add').click();
    cy.get('#number4').click();
    cy.get('#operator-add').click();
    cy.get('#number9').click()
    cy.get('#operator-subtract').click()
    cy.get('#number1').click()
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 15)
  })

  it('should be able to display a negative', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','-5')
  })

  it('should be able to display a float', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','2.5')
  })

  it('should be able to display a large number', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','199980')
  })

  it('should display erorr when dividing by zero', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','Error!')
  })
})