import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';

/*  global m  */
/*  global $  */

export default class GlossaryPage extends Page {
      oncreate(vnode) {
        super.oncreate(vnode);
        app.setTitle(app.translator.trans('flarum-ext-keywords.forum.pagetitle'));
        app.setTitleCount(0);
    }

  view() {
    const mappings = JSON.parse(app.forum.attribute('AdDef'));

    // Funzione ricerca live
    $(document).ready(function () {
      $('#filter').keyup(function () {
        // Ricerca dal campo di testo
        var filter = $(this).val(),
          count = 0;

        // Lopp nella lista ordinata ol e li
        $('ol li').each(function () {
          // Nascondi i risultati che non servono più
          if ($(this).text().search(new RegExp(filter, 'i')) < 0) {
            $(this).fadeOut();

            // Alrimenti mostra tutto il contenuto della pagina
          } else {
            $(this).show();
            count++;
          }
        });
      });
    });

    return m('.IndexPage', [
      IndexPage.prototype.hero(),
      m(
        '.container',
        m('.sideNavContainer', [
          m('nav.IndexPage-nav.sideNav', m('ul', listItems(IndexPage.prototype.sidebarItems().toArray()))),
          m('.IndexPage-results.sideNavOffset',
            m('h1', { className: 'glostitle' }, app.translator.trans('flarum-ext-keywords.forum.pagetitle')),
            m('div', { className: 'rowgl' }, [
              m(
                'div',
                { className: 'columngl' },
                m('div', { className: 'leftdiv' },
                  m('h3', { className: 'tagline' }, app.translator.trans('flarum-ext-keywords.forum.tagline')))
              ),
              m('div',
                { className: 'columngl' },
                m(
                  'div',
                  { className: 'rightdiv' },
                  m('form', { className: 'searchform cf' }, [
                    m('input', {
                      id: 'filter',
                      type: 'text',
                      placeholder: app.translator.trans('flarum-ext-keywords.forum.searchtext'),
                    }),
                  ])
                )
              ),
            ]),
            m('div',
              { className: 'containDef' },
              m(
                'ol',
                { id: 'myUL', className: 'rectangle-list' },
                Object.keys(mappings)
                  .sort()
                  .map((key) => m('li', { className: 'lista' }, key + ' - ' +  mappings[key]))
              )
            )
          ),
        ])
      ),
    ]);
  }
}
