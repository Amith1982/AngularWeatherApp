import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return browser.getTitle();
  }
  getParagraphText() {
    return element(by.css('app-weather h1')).getText();
  }

  getInputField() {
    return element(by.css('.form-control'));
  }

  getSearchButton() {
    return element(by.css('button'));
  }

  getDeleteButton() {
    return element(by.css('#delete'));
  }

}
