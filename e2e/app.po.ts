import { browser, element, by } from 'protractor';

export class DockerRegistryGUIPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
