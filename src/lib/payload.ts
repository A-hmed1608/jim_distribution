import config from '@payload-config';
import { getPayload as getPayloadInstance } from 'payload';

export const getPayloadClient = async () => {
  return await getPayloadInstance({ config });
};
