/// <reference types="cypress" />

describe("User Journey", () =>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })
    context("Journey for Course 1", () =>{
        it("Course: Testing Your First Next.js Application", () => {
            cy.getByData('course-0').find("a").eq(3).click()
            cy.location("pathname", { timeout: 10000 }).should("eq", "/testing-your-first-application")
            cy.getByData("next-lesson-button").click()
            cy.location("pathname", { timeout: 10000 }).should("eq", "/testing-your-first-application/app-install-and-overview")
            cy.getByData("challenge-answer-0").click()
            cy.getByData("next-lesson-button").should("exist").click()
            cy.location("pathname", { timeout: 10000 }).should("eq", "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
            cy.getByData("challenge-answer-0").click()
            cy.getByData("next-lesson-button").should("exist").click()
            cy.location("pathname", { timeout: 10000 }).should("eq", "/testing-your-first-application/setting-up-data-before-each-test")
            cy.getByData("challenge-answer-0").click()
            cy.getByData("next-lesson-button").should("exist").contains("Complete Course").click()           
            cy.location("pathname", { timeout: 10000 }).should("eq", "/")            
          })
    })
})