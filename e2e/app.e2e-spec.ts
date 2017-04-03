import { FinanceTrackerPage } from './app.po';

describe('finance-tracker App', () => {
  let page: FinanceTrackerPage;

  beforeEach(() => {
    page = new FinanceTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
