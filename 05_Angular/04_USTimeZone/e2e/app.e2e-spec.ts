import { USTimeZonePage } from './app.po';

describe('ustime-zone App', () => {
  let page: USTimeZonePage;

  beforeEach(() => {
    page = new USTimeZonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
