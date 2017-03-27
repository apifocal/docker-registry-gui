import { DockerViewerPage } from './app.po';

describe('docker-viewer App', () => {
  let page: DockerViewerPage;

  beforeEach(() => {
    page = new DockerViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
