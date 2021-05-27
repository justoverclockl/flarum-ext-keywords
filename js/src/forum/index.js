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
import IndexPage from 'flarum/components/IndexPage';
import GlossaryPage from './components/GlossaryPage';
import LinkButton from 'flarum/components/LinkButton';

app.initializers.add('justoverclock/flarum-ext-keywords', () => {
  extend(CommentPost.prototype, 'oninit', replaceKeywords);
});
app.routes.GlossaryPage = {
  path: '/glossary',
  component: GlossaryPage,
};
extend(IndexPage.prototype, 'navItems', (navItems) => {
  navItems.add(
    'Glossary',
    <LinkButton href={app.route('GlossaryPage')} icon="fas fa-atlas">
      {app.translator.trans('flarum-ext-keywords.forum.title')}
    </LinkButton>,
    100
  );
  return navItems;
});
