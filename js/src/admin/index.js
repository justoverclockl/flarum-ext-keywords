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

function updateMappings(stream, oldkey, key, value) {

  const mappings = JSON.parse(stream());

  if (mappings[oldkey]) delete mappings[oldkey]
  mappings[key] = value;

  const mappingsJSON = JSON.stringify(mappings);
  stream(mappingsJSON);
}

app.initializers.add('justoverclock/flarum-ext-keywords', () => {
  app.extensionData.for('justoverclock-keywords').registerSetting(function () {

    const stream = this.setting('justoverclock-keywords.AdDef');
    const mappings = JSON.parse(stream());
    const rows = Object.keys(mappings).map((key) => [key, mappings[key]]);

    // Aggiunta di un nuovo campo vuoto ad ogni inserimento
    rows.push(['', '']);

    return rows.map((row, i) => (

        <div>
          <label>{app.translator.trans('flarum-ext-keywords.admin.word')}:
            <input class="fieldinp" value={row[0]} onchange={(e) => updateMappings(stream, row[0], e.target.value, row[1])}></input></label>
          <label>{app.translator.trans('flarum-ext-keywords.admin.definition')}:
            <input class="fieldinp" value={row[1]} onchange={(e) => updateMappings(stream, row[0], row[0], e.target.value)}></input></label>
        {i !== rows.length - 1 && (
          <button class="Button Button--primary" type="button" onclick={() => updateMappings(stream, row[0], row[0], undefined)}>
            {app.translator.trans('flarum-ext-keywords.admin.removedef')}
          </button>
        )}
      </div>
    ));
  });
});
