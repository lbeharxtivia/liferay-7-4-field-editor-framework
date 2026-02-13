import { getThumbnailUri } from "./getThumbnailUri";

export const getSrcFromObservedEl = (elToObserve) => {
    let src;
    // Web content has image info in input
    if (elToObserve.tagName.toLowerCase() === 'input') {
        try {
            const imageInfo = JSON.parse((elToObserve as HTMLInputElement).value);
            const { fileEntryId = null, url = null } = imageInfo;
            if (fileEntryId && url) {
                src = getThumbnailUri({ fileEntryId, url, width: 300 });
            }
        } catch (error) {
            console.error(error);
        }
        // fragments have the thumbnail URL in source
    } else if (elToObserve.tagName.toLowerCase() === 'img') {
        const sourceEl = elToObserve?.parentElement?.firstElementChild as HTMLSourceElement;
        src = sourceEl?.srcset;
    }
    return src;
}