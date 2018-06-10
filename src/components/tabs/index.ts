import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import * as view from './tabs.template.html';

export class MyTabs extends GestureEventListeners(PolymerElement) {

    // Define a string template instead of a `<template>` element.
    static get template() {
        return view;
    }
    static get properties() {
      return {
        curretTab: {
          type: String
        }
      }
    }

    constructor() {
        super();
    }

    onHomeClicked() {
      (this as any).dispatchEvent(new CustomEvent('home-tab-clicked'));
    }

    onFeedClicked() {
      (this as any).dispatchEvent(new CustomEvent('feed-tab-clicked'));
    }
}