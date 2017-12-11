import { MyProjectNamePage } from './app.po';

describe('my-project-name App', () => {
  let page: MyProjectNamePage;

  beforeEach(() => {
    page = new MyProjectNamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
