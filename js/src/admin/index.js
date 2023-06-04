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

function updateMappings(stream, mappings) {
  const mappingsJSON = JSON.stringify(mappings);
  stream(mappingsJSON);
}

app.initializers.add('justoverclock/flarum-ext-keywords', () => {
  app.extensionData.for('justoverclock-keywords').registerSetting({
    setting: 'justoverclock-keywords.parse.once',
    label: app.translator.trans('flarum-ext-keywords.admin.parseonce'),
    type: 'boolean',
  });

  app.extensionData.for('justoverclock-keywords').registerSetting(function () {
    const stream = this.setting('justoverclock-keywords.AdDef');
    let mappings = JSON.parse(stream() || '{}');
    let rows = Object.entries(mappings);

    const updateRow = (key, value, index) => {
      rows[index] = [key, value];
      mappings = Object.fromEntries(rows);
      updateMappings(stream, mappings);
    };

    const addRow = () => {
      rows.push(['', '']);
      mappings = Object.fromEntries(rows);
      updateMappings(stream, mappings);
    };

    const deleteRow = (index) => {
      rows.splice(index, 1);
      mappings = Object.fromEntries(rows);
      updateMappings(stream, mappings);
    };

    const isDeletable = (index) => {
      return rows.length > 1 || (rows.length === 1 && index === 0);
    };

    return (
      <div>
        {rows.map(([key, value], index) => (
          <div>
            <label>
              {app.translator.trans('flarum-ext-keywords.admin.word')}:
              <input
                className="fieldinp"
                value={key}
                oninput={(e) => updateRow(e.target.value, value, index)}
              />
            </label>
            <label>
              {app.translator.trans('flarum-ext-keywords.admin.definition')}:
              <input
                className="fieldinp"
                value={value}
                oninput={(e) => updateRow(key, e.target.value, index)}
              />
            </label>
            {isDeletable(index) && (
              <button className="Button Button--primary" type="button" onclick={() => deleteRow(index)}>
                <i className="far fa-trash-alt"></i>
              </button>
            )}
          </div>
        ))}
        <button class="Button Button--primary addrowbtn" type="button" onclick={addRow}>
          {app.translator.trans('flarum-ext-keywords.admin.addRow')}
        </button>
      </div>
    );
  });
});
