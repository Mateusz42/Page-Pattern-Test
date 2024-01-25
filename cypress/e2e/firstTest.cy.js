import loginPage from "../pages/login";
import homePage from "../pages/homePage";

describe("Zadanie domowe", () => {
    const LoginPage = new loginPage();
    const HomePage = new homePage();
   
    it("Login page", () => {
        LoginPage.navigate();
        LoginPage.validateLoginTitle();
        LoginPage.validateLoginInputs();
        LoginPage.validateButton();
        LoginPage.validatePasswordLink();

    });
});
