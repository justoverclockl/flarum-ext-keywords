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
import Tooltip from 'flarum/common/components/Tooltip';

export default function () {
  // Lettura dell'input form in formato JSON
  const mappings = JSON.parse(app.forum.attribute('AdDef'));

  // filtro per evitare il parsing doppio delle parole
  Object.keys(mappings).filter((w) => {
    let regex;

    if (app.forum.attribute('ParseOnce') === true) {
      regex = new RegExp('\\b(' + w + ')\\b(?![^<]*>|[^<>]*</[^p])', 'i');
    } else {
      regex = new RegExp('\\b(' + w + ')\\b(?![^<]*>|[^<>]*</[^p])', 'gi');
    }

    this.attrs.post.data.attributes.contentHtml = this.attrs.post.data.attributes.contentHtml.replace(regex, (match) => {
      let tooltip = mappings[match.toLowerCase()];

      if (tooltip) {
        return `<span class="definition" data-tooltip="${tooltip}">${match}</span>`;
      } else {
        return match;
      }
    });
  });
}
