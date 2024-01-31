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
   it('should log in the second user successfully', () => {
  loginPage.visit();
  loginPage.fillEmail('testowyqa@qa.team');
  loginPage.fillPassword(' QA!automation-1');
  loginPage.submit();
});
   afterEach(() => {
    loginPage.logOut();
  });
});
