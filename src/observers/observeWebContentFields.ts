declare const Liferay;

import { debounce } from "../util";
import { populateRandomNumberField } from "../myTestFunctionality/populateRandomNumberField";
import { observeWebContentPreviewImage } from "./previewImage/observeWebContentPreviewImage";

export const observeWebContentFields = () => {
    const fieldsContainerEl: HTMLDivElement = document.querySelector(
        "#_com_liferay_journal_web_portlet_JournalPortlet_fieldsContent",
    );
    if (fieldsContainerEl) {
        if (Liferay.fieldWebContentObserver) {
            Liferay.fieldWebContentObserver.disconnect?.();
        }
        const debouncedAddButton = debounce(() => {
            observeWebContentPreviewImage();
            populateRandomNumberField({ observer, shouldDestroyObserver: true });
        }, 500);
        Liferay.fieldWebContentObserver = new MutationObserver(debouncedAddButton);
        const observer = Liferay.fieldWebContentObserver
        const config = { attributes: false, childList: true, subtree: true };
        observer.observe(fieldsContainerEl, config);
    }
};
