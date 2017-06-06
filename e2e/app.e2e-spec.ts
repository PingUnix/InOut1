import { InOutPage } from './app.po';

describe('in-out App', function() {
  let page: InOutPage;

  beforeEach(() => {
    page = new InOutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
