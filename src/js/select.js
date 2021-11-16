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
    var getComputedPropertyValue = function (property) {
        var prop = window.getComputedStyle(element, null).getPropertyValue(property);
        if (prop.substr(-2) === 'px') {
            return parseInt(prop.slice(0, -2));
        }
        return prop;
    };
    return { element: element, getComputedPropertyValue: getComputedPropertyValue };
};
