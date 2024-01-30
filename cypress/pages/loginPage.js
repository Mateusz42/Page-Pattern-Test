class LoginPage {
    visit() {
      cy.visit("https://www.edu.goit.global/account/login");
    }
  
    getLoginHeader() {
      return cy.get(".css-10stgr7 > .css-c1vj7d");
    }
  
    getEmailInput() {
      return cy.get("#user_email");
    }
  
    getPasswordInput() {
      return cy.get("#user_password");
    }
  
    getLoginButton() {
      return cy.get(".eckniwg2");
    }
  
    getForgotPasswordLink() {
      return cy.get(".css-1f1fv1i > .css-1qrvie4");
    }
    get loginButton() {
      return cy.get('button[type="submit"]');
  }
  get emailInput() {
      return cy.get('#user_email');
  }
  get passwordInput() {
      return cy.get('[name="password"]');
  }
  loginUser(emal, password) {
this.emailInput.type(email);
this.passwordInput.type(password);
this.loginButton.click();
cy.url().should('include', 'homepage');
}
  }
  
  export default LoginPage;
