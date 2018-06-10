import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import * as view from './feed-tab.template.html';

export class FeedTab extends GestureEventListeners(PolymerElement) {
   postMessage = 'abc';
    // Define a string template instead of a `<template>` element.
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    static get properties() {
      return {
        postMessage: {
          type: String,
          notify: true
        }
      };
  }

    ready() {
      this.postMessage = 'abc';
      super.ready();
      this.userRequest();
    }

    changeMessage() {
      this.postMessage = "pedik";
    }

    formSubmit(e) {
      e.preventDefault();
      this.postMessage = "pedik";
    }

    userRequest() {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://randomuser.me/api/?results=10', true);
      xhr.send();
      xhr.onreadystatechange = function() { // (3)
        if (xhr.readyState != 4) return;
      
      
        if (xhr.status != 200) {
          alert(xhr.status + ': ' + xhr.statusText);
        } else {
          // console.log(JSON.parse(xhr.responseText));
        }
      
      }
  }
}