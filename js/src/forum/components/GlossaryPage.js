import app from 'flarum/app';
import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';

/* global m */

export default class GlossaryPage extends Page {
  constructor() {
    super();
    this.displayCount = 10;
  }

  oncreate(vnode) {
    super.oncreate(vnode);
    app.setTitle(app.translator.trans('flarum-ext-keywords.forum.pagetitle'));
    app.setTitleCount(0);
  }

  loadMore() {
    this.displayCount += 10;
  }

  view() {
    const mappings = JSON.parse(app.forum.attribute('AdDef'));
    console.log(mappings);

    window.addEventListener('DOMContentLoaded', () => {
      const filterInput = document.getElementById('filter');
      filterInput.addEventListener('keyup', () => {
        const filter = filterInput.value;
        let count = 0;

        document.querySelectorAll('.defContainer').forEach((def) => {
          if (def.textContent.search(new RegExp(filter, 'i')) < 0) {
            def.style.display = 'none';
          } else {
            def.style.display = 'block';
            count++;
          }
        });
      });
    });

    return (
      <div className="IndexPage">
        {IndexPage.prototype.hero()}
        <div className="container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav">
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>
            <div className="IndexPage-results sideNavOffset">
              <h1 className="glostitle">{app.translator.trans('flarum-ext-keywords.forum.pagetitle')}</h1>
              <div className="rowgl">
                <div className="columngl">
                  <div className="leftdiv">
                    <h3 className="tagline">{app.translator.trans('flarum-ext-keywords.forum.tagline')}</h3>
                  </div>
                </div>
                <div className="columngl">
                  <div className="rightdiv">
                    <form className="searchform cf">
                      <input
                        id="filter"
                        type="text"
                        placeholder={app.translator.trans('flarum-ext-keywords.forum.searchtext')}
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="containDef">
                {Object.keys(mappings)
                  .sort()
                  .slice(0, this.displayCount)
                  .map((key) => (
                    <div className="defContainer">
                      <div className="defTitle">
                        <strong>{app.translator.trans('flarum-ext-keywords.forum.term')}</strong>: {key}
                      </div>
                      <div className="defDesc">
                        <strong>{app.translator.trans('flarum-ext-keywords.forum.definition')}</strong>: {mappings[key]}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="loadMoreContainer">
              {Object.keys(mappings).length > this.displayCount && (
                <button onclick={() => this.loadMore()} className="Button loadMoreDefButton">
                  {app.translator.trans('flarum-ext-keywords.forum.loadMore')}
                </button>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
