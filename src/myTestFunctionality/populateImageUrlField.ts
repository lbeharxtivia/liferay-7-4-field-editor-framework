import { getFieldByLabel, setReactDomInputValue } from "../util";
import { getContentImageInput } from "../util/getContentImageInput";
import { getPreviewImage } from "../util/getPreviewImage";
import { getSrcFromObservedEl } from "../util/getSrcFromObservedEl";

export const populateImageUrlField = async (contentType) => {
    const elToObserve = contentType === 'fragment' ? getPreviewImage() : getContentImageInput();
    const src = getSrcFromObservedEl(elToObserve);
    const srcField = getFieldByLabel('Image Url');
    if (src && srcField) {
        setReactDomInputValue(srcField, src);
    }
}