/**
 * The fragment editor config inputs use react DOM
 * So setting input element value doesn't work
 *
 * @param {element} inputEl
 * @param {string} value
 */
export const setReactDomInputValue = (inputEl:HTMLInputElement, value:string) => {
  inputEl.focus();
  const nativeValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value",
  ).set;
  nativeValueSetter.call(inputEl, value);

  inputEl.dispatchEvent(new Event("input", { bubbles: true }));
  inputEl.dispatchEvent(new Event("change", { bubbles: true }));

  document.body.focus();

  inputEl.dispatchEvent(new Event("blur", { bubbles: true }));
};
