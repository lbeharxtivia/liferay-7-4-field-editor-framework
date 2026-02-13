export const getContentImageInput = () => {
    const contentImageInputQuery = 'input[name^="_com_liferay_journal_web_portlet_JournalPortlet_ddm$$Image"]';
    const contentImageInput: HTMLInputElement = document.querySelector(contentImageInputQuery);
    return contentImageInput;
}