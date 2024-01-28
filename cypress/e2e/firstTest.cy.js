import LoginPage from "../pages/Login";
import HomePage from "../pages/homePage";

describe("Page object example", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  it("login page test", () => {
    loginPage.visit();
    loginPage.getLoginHeader().should("be.visible").and("have.text", "Login");
    loginPage.getEmailInput().should("be.visible");
    loginPage.getPasswordInput().should("be.visible");
    loginPage.getLoginButton().should("be.visible");
    loginPage.getForgotPasswordLink().should("be.visible").and("have.text", "I can't remember the password");
});
it('Successfully navigates to The GoIt page' , () => {
  cy.url().should('include' , 'account/login')
 });
it('Successfully login to GoIt page', () => {
  cy.loginUser('testowyqa@qa.team',' QA!automation-1');
 
});
})