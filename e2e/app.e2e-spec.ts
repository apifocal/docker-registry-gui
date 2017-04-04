import { DockerRegistryGUIPage } from './app.po';

describe('docker-viewer App', () => {
  let page: DockerRegistryGUIPage;

  beforeEach(() => {
    page = new DockerRegistryGUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
