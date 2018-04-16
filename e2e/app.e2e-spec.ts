import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('angular-weather App', () => {
  let page: AppPage;
  beforeAll(async () => {
    browser.waitForAngularEnabled(false);
  });

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo();
    browser.waitForAngularEnabled(true);
  });

  it('should have a title', () => {
    const actual = page.getTitle();
    const expected = 'AngularWeather';
    expect(actual).toEqual(expected);
   });

   it('should contain a default text when no data to display', () => {
    const expected = 'No data to display, please enter a valid City name';
    expect(element(by.css('app-results')).getText()).toBe(expected);
   });

   it('Input a valid city name to display result and delete', () => {
    const searchField = page.getInputField();
    const cityName = 'Paris';
    searchField.sendKeys(cityName);
    const searchButton = page.getSearchButton();
    searchButton.click();
    const expected = 'City';
    expect(element(by.css('table th')).getText()).toBe(expected);
    expect(element(by.css('tbody td')).getText()).toBe(cityName);
    const deleteButton = page.getDeleteButton();
    deleteButton.click();
    const noResultsText = 'No data to display, please enter a valid City name';
    expect(element(by.css('app-results')).getText()).toBe(noResultsText);
  });
});
