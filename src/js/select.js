"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.select = void 0;
/**
 * Additional DOM Functions.
 * @param elementSelector
 * Selector of element.
 */
var select = function (elementSelector) {
    /**
     * The element selected.
     */
    var element = document.querySelector(elementSelector);
    /**
     * Checks if an element has been rendered in the document, then returns a property of the element.
     * @param property
     * The CSS property to check for.
     * @returns string | number
     */
    var getWindowStyleValue = function (property) {
        var prop = window.getComputedStyle(element, null).getPropertyValue(property);
        return prop;
    };
    return { element: element, getWindowStyleValue: getWindowStyleValue };
};
exports.select = select;
