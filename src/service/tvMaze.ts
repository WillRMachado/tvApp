import {AxiosRequestConfig} from 'axios';

import networkCaller from './client/networkCaller';

const baseUrl = 'https://api.tvmaze.com/';

const getSeriesList = async (page: number) => {
  const url = `${baseUrl}shows?page=${page}`;
  const method = 'get';

  const requestData: AxiosRequestConfig = {
    url,
    method,
  };

  return await networkCaller(baseUrl, requestData);
};

const searchSeriesList = async (term: string) => {
  const url = `${baseUrl}search/shows?q=${term}`;
  const method = 'get';

  const requestData: AxiosRequestConfig = {
    url,
    method,
  };

  return await networkCaller(baseUrl, requestData);
};

const getSerieSeasonEpisodes = async (id: number | string) => {
  const url = `${baseUrl}shows/${id}/episodes`;
  const method = 'get';

  const requestData: AxiosRequestConfig = {
    url,
    method,
  };

  return await networkCaller(baseUrl, requestData);
};

export {getSeriesList, searchSeriesList, getSerieSeasonEpisodes};
