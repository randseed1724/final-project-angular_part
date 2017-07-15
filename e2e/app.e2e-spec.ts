import { AngularQuotesWallPage } from './app.po';

describe('angular-quotes-wall App', () => {
  let page: AngularQuotesWallPage;

  beforeEach(() => {
    page = new AngularQuotesWallPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
