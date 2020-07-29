import LoginPage from '../../../pageObjects/login.page';
const login = require('../testData/expected.json').login;
import ProfilePage from '../../../pageObjects/profile.page';
import WAIT_TIME_MEDIUM from '../../../testData/waitTimes';
import user from '../../../testData/user';

describe('New user registration page', () => {
  before(() => {
    LoginPage.open();
  });

  it('Check the header', function () {
    expect(LoginPage.headerLogin.getText()).eq(login.header);
  });

  it('Check if the Email input has a placeholder text Email ', function () {
    expect(LoginPage.inputUsername.getAttribute('placeholder')).eq(login.emailInput);
  });

  it('Check if the Password input has a placeholder text Password ', function () {
    expect(LoginPage.inputPassword.getAttribute('placeholder')).eq(login.passwordInput);
  });

  it('Check if the Register link has text Create one ', function () {
    expect(LoginPage.registerLink.getText()).eq(login.registerLink);
  });

  it('Check if the Reset link has text Reset it ', function () {
    expect(LoginPage.resetLink.getText()).eq(login.resetLink);
  });

  it('Check if the Login Button has text Log in ', function () {
    expect(LoginPage.loginBtn.getText()).eq(login.loginBtn);
  });
});
