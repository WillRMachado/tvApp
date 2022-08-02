import {SearchSerieType} from '~src/types/series';

export const searchToList = (searchList: SearchSerieType[]) =>
  searchList.map((item) => item.show);
