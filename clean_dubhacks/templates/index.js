"use strict";
(function() {

  window.addEventListener("load", init);

  // Module global constants
  const API_URL = 'https://randomuser.me/api/';

  /** Initializes the html. Adds event listeners. */
  function init() {
    id('signup').addEventListener('click', signup);
    id('foodloc').addEventListener('click', foodloc);
    id('sharefood').addEventListener('click', sharefood);
  }

  function signup() {
    location.href = "index2.html";
  }

  function foodloc() {
    location.href = "about:blank";
  }

  function sharefood() {
    location.href = "index1.html";
  }

  /**
   * Shortcut function of document.getElementById(id).
   * @param {String} id - Name of the id.
   * @return {Element} Returns 0 to 1 element.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Shortcut function of document.getElementsByTagName(tag).
   * @param {String} tagName - Name of the tag.
   * @returns {Array} Return an array of elements.
   */
  function tag(tagName) {
    return document.getElementsByTagName(tagName);
  }

  /**
   * Shortcut function of documenet.createElement(tagName).
   * @param {String} tagName - The name of tag to be created.
   * @return {Element} Return a new element with name tagName.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

  /**
   * Shortcut function of document.querySelector(selector).
   * @param {String} selector - Name of the selector.
   * @return {Element} Return the element which matches the parameter and appears first in HTML.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }
})();