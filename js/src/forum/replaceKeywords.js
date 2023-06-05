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
  const post = this.attrs.post;

  if (post) {
    const mappings = JSON.parse(app.forum.attribute('AdDef'));

    if (Object.keys(mappings).length === 0) {
      return;
    }

    const parseOnce = app.forum.attribute('ParseOnce') === true;
    const regexFlags = parseOnce ? 'i' : 'gi';
    const regex = new RegExp('\\b(' + Object.keys(mappings).join('|') + ')\\b(?![^<]*>|[^<>]*</[^p])', regexFlags);

    this.attrs.post.data.attributes.contentHtml = post.contentHtml().replace(regex, (match) => {
      const tooltip = mappings[match.toLowerCase()];

      if (tooltip) {
        return `<span class="definition" data-tooltip="${tooltip}">${match}</span>`;
      } else {
        return match;
      }
    });
  }
}
