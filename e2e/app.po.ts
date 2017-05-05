import { browser, element, by } from 'protractor';

export class NgMaterialSeed2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.header-headline h1')).getText();
  }
}
