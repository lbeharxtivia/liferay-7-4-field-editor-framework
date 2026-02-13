declare const Liferay;

import { populateRandomNumberField } from "../myTestFunctionality/populateRandomNumberField";
import { debounce } from "../util";

import { observeFragmentPreviewImage } from "./previewImage/observeFragmentPreviewImage";

export const observeFragmentConfig = () => {
    const sidePanelQuery = ".page-editor__item-configuration-sidebar";
    const sidePanelEl: HTMLDivElement = document.querySelector(
        sidePanelQuery
    );

    if (sidePanelEl) {
        if (Liferay.fieldFragmentObserver) {
            Liferay.fieldFragmentObserver.disconnect?.();
        }
        const debouncedAddButton = debounce(() => {
            observeFragmentPreviewImage();
            populateRandomNumberField({ observer, shouldDestroyObserver: false });
        }, 500);
        Liferay.fieldFragmentObserver = new MutationObserver(debouncedAddButton);
        const observer = Liferay.fieldFragmentObserver;
        const config = { attributes: false, childList: true, subtree: false };
        observer.observe(sidePanelEl, config);
    }
};
