import { NgMaterialSeed2Page } from './app.po';

describe('ng-material-seed2 App', () => {
  let page: NgMaterialSeed2Page;

  beforeEach(() => {
    page = new NgMaterialSeed2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
