type GetThumbnailUri = (args:{ fileEntryId: number, url: string; width: number }) => string;

export const getThumbnailUri:GetThumbnailUri = ({ fileEntryId, url, width }) => {
    const fileName = url.split('/').slice(-1)[0].split('?')[0];
    return `/o/adaptive-media/image/${fileEntryId}/Thumbnail-${width}x${width}/${fileName}?t=${Date.now()}`;
}

