declare const Liferay;

import { populateImageUrlField } from "../../myTestFunctionality/populateImageUrlField";
import { ContentType } from "../../types/ContentType.type";
import { debounce } from "../../util";
import { getContentImageInput } from "../../util/getContentImageInput";
import { getPreviewImage } from "../../util/getPreviewImage";

export const observePreviewImage = (contentType: ContentType) => {
    if(Liferay.imageObserver){
        Liferay.imageObserver.disconnect?.();
    }
    // For when image changes
    const elToObserve = contentType === 'fragment' ? getPreviewImage() : getContentImageInput();
    if (contentType && elToObserve && !Liferay.imageObserver) {
        const debouncedAddContentBlurhash = debounce(() => populateImageUrlField(contentType), 500);
        Liferay.imageObserver = new MutationObserver(debouncedAddContentBlurhash);
        const observer = Liferay.imageObserver
        const config = { attributes: true, childList: false, subtree: false };
        observer.observe(elToObserve, config);
    }
    // For when image is already present on load
    populateImageUrlField(contentType);
}
