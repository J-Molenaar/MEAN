import { DojoWeahterPage } from './app.po';

describe('dojo-weahter App', () => {
  let page: DojoWeahterPage;

  beforeEach(() => {
    page = new DojoWeahterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
