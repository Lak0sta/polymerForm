import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import * as view from './home-tab.template.html';

export class HomeTab extends GestureEventListeners(PolymerElement) {

    // Define a string template instead of a `<template>` element.
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    reset() {
        (this as any).dispatchEvent(new CustomEvent('reset-clicked'));
    }
}