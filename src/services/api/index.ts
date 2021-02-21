import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

import ElderScrollsAPI from 'services/api/elder-scrolls';

/**
 * Top level function that wraps all axios calls. All API calls should run through
 * this method in case we need to make some app wide API changes for all requests
 */
const runAPIRequest = (config: AxiosRequestConfig): AxiosPromise => {
  return axios.request(config);
};

//
// --- API Namespace Object ---

/**
 * Wrap all API calls in a namespaced object so we only need to import one file to
 * access all API endpoints needed for the app.
 *
 * Individual API calls are organized into sub-folders
 */
const API = {
  /** Elder Scrolls API Endpoints */
  ElderScrolls: ElderScrollsAPI,
  /** Export app level api request function */
  runAPIRequest,
};

export default API;
