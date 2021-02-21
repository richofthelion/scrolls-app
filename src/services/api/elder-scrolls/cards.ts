import { runElderScrollsAPIRequest } from './_base';
import { ElderScrollsCardAPIResponse } from 'models/ElderScrollsModel';

/**
 * Elder Scrolls Cards API
 *
 * @see https://docs.elderscrollslegends.io/
 */

/**
 * Get page of 20 elder scrolls cards
 */
const getCards = async (page: number = 1, name?: string): Promise<ElderScrollsCardAPIResponse> => {
  const baseUrl = `/cards?pageSize=20&page=${page}`;
  const url = name ? `${baseUrl}&name=${name}` : baseUrl;

  return runElderScrollsAPIRequest({
    url,
  })
  .then((result) => result.data)
  .catch(error => console.log(`Error fetching cards: ${error}`));
};

//
// --- Card Endpoints Export ---

export const cardEndpoints = {
  getCards,
};
