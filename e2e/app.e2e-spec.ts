import { UniversalAngularPage } from './app.po';

describe('universal-angular App', function() {
  let page: UniversalAngularPage;

  beforeEach(() => {
    page = new UniversalAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
