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
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import replaceKeywords from './replaceKeywords';

app.initializers.add('justoverclock/flarum-ext-keywords', () => {
  extend(CommentPost.prototype, 'oninit', replaceKeywords);
});
