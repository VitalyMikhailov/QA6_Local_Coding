import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import user from '../../../testData/user';
import {WAIT_TIME_SHORT} from '../../../testData/waitTimes';

describe('LOGIN FUNCTIONALITY', function() {

  before(() => {
    LoginPage.open();
  });

  it('should verify that user can login as NEW USER', function() {
    LoginPage.open();
    LoginPage.login(user.new.email, user.new.password);
    TopMenuPage.userAvatarName.waitForDisplayed({WAIT_TIME_SHORT});
    expect((ProfilePage.headerProfile).getText()).eq(user.new.firstName + ' ' + user.new.lastName);
  });

  it('should verify that user can login as ADMIN', function() {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    TopMenuPage.userAvatarName.waitForDisplayed({WAIT_TIME_SHORT});
    expect((ProfilePage.headerProfile).getText()).eq(user.admin.firstName + ' ' + user.admin.lastName);
  });

  it('should verify that user can login as LEARNER', function() {
    LoginPage.open();
    LoginPage.login(user.learner.email, user.learner.password);
    TopMenuPage.userAvatarName.waitForDisplayed({WAIT_TIME_SHORT});
    expect((ProfilePage.headerProfile).getText()).eq(user.learner.firstName + ' ' + user.learner.lastName);
  });

  it('should verify that user can login as STUDENT', function() {
    LoginPage.open();
    LoginPage.login(user.student.email, user.student.password);
    TopMenuPage.userAvatarName.waitForDisplayed({WAIT_TIME_SHORT});
    expect((ProfilePage.headerProfile).getText()).eq(user.student.firstName + ' ' + user.student.lastName);
  });
});