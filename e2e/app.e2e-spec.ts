import { ProjectSentinelsPage } from './app.po';

describe('project-sentinels App', () => {
  let page: ProjectSentinelsPage;

  beforeEach(() => {
    page = new ProjectSentinelsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
