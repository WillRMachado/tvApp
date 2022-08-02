export const addPageFromUndefined = (page?: number) =>
  page || page === 0 ? page + 1 : 0;
