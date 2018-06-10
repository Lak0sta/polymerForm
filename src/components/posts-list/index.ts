import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners';
import * as view from './posts-list.template.html';

export class PostsList extends GestureEventListeners(PolymerElement) {

  posts:any;

  // Define a string template instead of a `<template>` element.
  static get template() {
      return view;
  }

  constructor() {
      super();
  }

  ready() {
    super.ready();
    this.usersRequest();
    // console.log(this.posts);
  }

  usersRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://randomuser.me/api/?results=10', true);
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState != 4) return;
      if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
      } else {
        const { results } = JSON.parse(xhr.responseText);
        this.posts = results;
        console.log(results);
      }
    }
  }
}