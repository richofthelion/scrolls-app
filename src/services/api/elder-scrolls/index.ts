import { cardEndpoints } from './cards';
//
// --- Export Endpoints ---

/**
 * return all elder scrolls API calls namespaced to a ElderScrollsAPI namespace object
 *
 */
const ElderScrollsAPI = {
  ...cardEndpoints,
};

export default ElderScrollsAPI;
