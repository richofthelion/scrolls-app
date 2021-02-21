import { AxiosRequestConfig, AxiosPromise } from 'axios';

import API from 'services/api';

//
// --- Constants ---

/**
 * base url (prefix) for all elder scrolls api calls
 */
export const ELDER_SCROLLS_API_BASE_URL = 'https://api.elderscrollslegends.io/v1/';

//
// --- Run Elder Scrolls API Wrapper ---

/**
 * Function that wraps all elder scrolls api calls. All elder scrolls API calls should run through
 * this method in case we need to make some API changes for elder scrolls API requests
 *
 * BaseURL is set to ELDER_SCROLLS_API_BASE_URL so individual calls include values relative
 * to this path as its `url` value
 */
export const runElderScrollsAPIRequest = (config: AxiosRequestConfig): AxiosPromise => {
  config.baseURL = ELDER_SCROLLS_API_BASE_URL;

  return API.runAPIRequest(config);
};
