// export const removeTags = (text) => {
//     return text.replace(/<\/?(p|strong)>/g, '');
// };

export const removeTags = (text) => {
    return text.replace(/<[^>]*>?/gm, '');
};