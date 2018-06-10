import * as kebabCase from 'lodash/fp/kebabCase';
import { MyApp } from './app';
import { MyTopBar } from './top-bar';
import { MyTopMessage } from './top-message';
import { MyCards } from './cards';
import { MyPopUpModal } from './pop-up-modal';
import { MyTabs } from './tabs';
import { HomeTab } from './home-tab';
import { FeedTab } from './feed-tab';
import { PostsList } from './posts-list';

// add custom elements here
const elements = {
    MyApp,
    MyTopBar,
    MyTopMessage,
    MyCards,
    MyPopUpModal,
    MyTabs,
    HomeTab,
    FeedTab,
    PostsList
};

// register all components as kebab case
Object.keys(elements)
    .forEach(key => {
        customElements.define(kebabCase(key), elements[key])
    });
