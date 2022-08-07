import {AxiosRequestConfig} from 'axios';

import networkCaller from './client/networkCaller';

const baseUrl = 'https://api.tvmaze.com/';

const getShowsList = async (page: number) => {
  const url = `${baseUrl}shows?page=${page}`;
  const method = 'get';

  const requestData: AxiosRequestConfig = {
    url,
    method,
  };

  return await networkCaller(baseUrl, requestData);
};

const searchShowsList = async (term: string) => {
  const url = `${baseUrl}search/shows?q=${term}`;
  const method = 'get';

  const requestData: AxiosRequestConfig = {
    url,
    method,
  };

  return await networkCaller(baseUrl, requestData);
};

const getShowSeasonEpisodes = async (id: number | string) => {
  const url = `${baseUrl}shows/${id}/episodes`;
  const method = 'get';

  const requestData: AxiosRequestConfig = {
    url,
    method,
  };

  return await networkCaller(baseUrl, requestData);
};

const getSeasonEpisodes = async (id: string) => {
  const url = `${baseUrl}seasons/${id}/episodes`;
  const method = 'get';

  const requestData: AxiosRequestConfig = {
    url,
    method,
  };

  return await networkCaller(baseUrl, requestData);
};

export {
  getShowsList,
  searchShowsList,
  getShowSeasonEpisodes,
  getSeasonEpisodes,
};
