  /**
   * Uses xpath to get a LR field by label
   * since there is no attribute that corresponds with field name or key
   *
   */
  type GetFieldByLabel = (label:string) => HTMLInputElement;
  export const getFieldByLabel:GetFieldByLabel = (label) => {
    const parentEl = document.querySelector(
      "#portlet_com_liferay_journal_web_portlet_JournalPortlet, .page-editor__item-configuration-sidebar",
    );
    const match = document.evaluate(
      `//label[text()='${label}']`,
      parentEl,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null,
    ).singleNodeValue as HTMLElement;

    const inputEl =
      match?.closest(".form-group, .field-wrapper")?.querySelector("input") ||
      match?.nextElementSibling?.querySelector("input") ||
      match?.nextSibling;

    return inputEl as HTMLInputElement;
  };