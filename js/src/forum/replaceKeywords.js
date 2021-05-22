/*
 * This file is part of justoverclock/flarum-ext-keywords.
 *
 * Copyright (c) 2021 Marco Colia.
 * Special thanks to Askvortsov
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */


import app from 'flarum/app';

export default function () {

  // Lettura dell'input form in formato JSON
  const mappings = JSON.parse(app.forum.attribute('AdDef'));

  // Regex per il riconoscimento delle parole da sostituire
  const regex = new RegExp('\\b(' + Object.keys(mappings).join('|') + ')\\b(?![^<]*>|[^<>]*</[^p])', 'gi');

  this.attrs.post.data.attributes.contentHtml = this.attrs.post.data.attributes.contentHtml.replace(regex, (match) => {

    let tooltip = mappings[match.toLowerCase()];

    if (tooltip) {
      return `<span class="definition" data-tooltip="${tooltip}">${match}<i class="fas fa-caret-left"></i></i></span>`;
    } else {
      return match;
    }
  });
}
