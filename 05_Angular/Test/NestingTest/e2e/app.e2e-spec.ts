import { NestingTestPage } from './app.po';

describe('nesting-test App', () => {
  let page: NestingTestPage;

  beforeEach(() => {
    page = new NestingTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
