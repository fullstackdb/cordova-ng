import { AMERIAPorshePage } from './app.po';

describe('ameriaporshe App', () => {
  let page: AMERIAPorshePage;

  beforeEach(() => {
    page = new AMERIAPorshePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
