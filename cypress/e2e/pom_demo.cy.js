import {LoginPage} from "./pages/login_page"

const loginPage = new LoginPage()

describe('Login Tests', () => {

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })

    it('POM Demo', () => {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()    
    })
    
    it('Login Test1', () => {         
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()    
    })
})

