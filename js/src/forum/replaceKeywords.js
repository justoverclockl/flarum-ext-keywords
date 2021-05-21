const mappings = {
  flarum: 'Flarum è un potente software per creare forum di discussione nel suo sito web.',
  composer: 'Composer  è un dependecy manager che si utilizza per aggiornare o installare estensioni di Flarum',
  require: 'u require this?',
  tag: 'Sono le sezioni del forum'
};

const regex = new RegExp('\\b(' + Object.keys(mappings).join('|') + ')\\b(?![^<]*>|[^<>]*</[^p])', 'gi');

export default function () {
  this.attrs.post.data.attributes.contentHtml = this.attrs.post.data.attributes.contentHtml.replace(regex, (match) => {
    let tooltip = mappings[match.toLowerCase()];

    if (tooltip) {
      return `<span class="glossary" title="${tooltip}">${match}</span>`;
    } else {
      return match;
    }
  });
}
