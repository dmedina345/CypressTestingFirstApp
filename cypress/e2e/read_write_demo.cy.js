/// <reference_types = "cypress"/>

let login_data;

before(() => {

    cy.fixture('example.json').then((data) => {
        login_data = data
    })
})

it ('Read File from fixtures', ()=>{
    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    })

    cy.log(login_data.name)
})

it('Read File with function', () => {
    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.email)
    })
})

it('Write file demo', () => {
    cy.writeFile('sample.txt', 'Hello Testing writting files.')
    cy.writeFile('sample.txt', 'appending line.', {flag: 'a+'})

})