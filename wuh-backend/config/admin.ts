export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'QURNSU5fSldUX1NFQ1JFVA=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'QVBJX1RPS0VOX1NBTFQ='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'VFJBTlNGRVJfVE9LRU5fU0FMVA=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
