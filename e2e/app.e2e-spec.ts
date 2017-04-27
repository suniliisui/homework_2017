import { PocMdPage } from './app.po';

describe('poc-md App', () => {
  let page: PocMdPage;

  beforeEach(() => {
    page = new PocMdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
