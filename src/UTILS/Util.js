export const removeTags = (text) => {
    return text.replace(/<\/?(p|strong)>/g, '');
};