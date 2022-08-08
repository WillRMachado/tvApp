import {seriesTypes} from '~types';

export const searchToList = (
  searchList: seriesTypes.SearchSerieType[],
): seriesTypes.SerieType[] => {
  const result: seriesTypes.SerieType[] = [];
  searchList.forEach((item) => item?.show && result.push(item?.show));
  return result;
};
