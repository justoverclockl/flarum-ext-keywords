<?php

/*
 * This file is part of justoverclock/flarum-ext-keywords.
 *
 * Copyright (c) 2021 Marco Colia.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\Keywords;


use Flarum\Extend;
use Flarum\Api\Event\Serializing;


return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
        ->route('/glossary', 'justoverclock/flarum-ext-keywords'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__.'/resources/locale'),
    (new Extend\Settings)
        ->serializeToForum('AdDef', 'justoverclock-keywords.AdDef'),
    (new Extend\Settings())->serializeToForum('ParseOnce', 'justoverclock-keywords.parse.once', 'boolval', false),
];
