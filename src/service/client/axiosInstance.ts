import {axios, axiosRetry, AxiosRequestHeaders} from '~modules';

const axiosInstance = (
  url: string,
  headers?: AxiosRequestHeaders,
  timeout?: number,
  retries?: number,
) => {
  axios.create({
    baseURL: url,
    timeout: timeout || 30000,
    headers: headers,
  });

  const retriesLimit = retries || 4;

  axiosRetry(axios, {
    retries: retriesLimit,
    retryDelay: (retryCount) => {
      return retryCount * 1000;
    },
  });

  return axios;
};

export default axiosInstance;
