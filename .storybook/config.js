import { configure } from '@kadira/storybook';
import '../src/css/style.css';

function loadStories() {
  require('../src/js/components/stories/');
}

configure(loadStories, module);
