/**
 * Additional DOM Functions.
 * @param elementSelector
 * Selector of element.
 */
export const select = (elementSelector: string) => {
    /**
     * The element selected.
     */
    let element: HTMLElement = document.querySelector(elementSelector);
    /**
     * Checks if an element has been rendered in the document, then returns a property of the element.
     * @param property 
     * The CSS property to check for.
     * @returns string | number
     */
    const getWindowStyleValue = (property: string) => {
        let prop = window.getComputedStyle(element, null).getPropertyValue(property);
        return prop;
    }
    return {element, getWindowStyleValue}
}
