export const getPreviewImage = () => {
    const parentEl:HTMLDivElement = document.querySelector(
        "#portlet_com_liferay_journal_web_portlet_JournalPortlet, .page-editor__topper.active",
    );
    const previewImage:HTMLImageElement = parentEl.querySelector(
        ".page-editor__topper.active img.page-editor__editable, .image-picker-preview>img",
    ) as HTMLImageElement;
    
    return previewImage;
}