import { NgMaterialSeed2Page } from './app.po';

describe('ng-material-seed App', () => {
  let page: NgMaterialSeed2Page;

  beforeEach(() => {
    page = new NgMaterialSeed2Page();
  });

  it('should display message saying Ng Material Seed', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ng Material Seed');
  });
});
