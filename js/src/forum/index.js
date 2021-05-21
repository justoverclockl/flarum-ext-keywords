import app from 'flarum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import replaceKeywords from './replaceKeywords';

app.initializers.add('justoverclock/flarum-ext-keywords', () => {
  extend(CommentPost.prototype, 'oninit', replaceKeywords);
});
