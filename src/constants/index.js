const BASE =
  process.env.NODE_ENV === 'production'
    ? 'prod'
    : 'http://feedback360api.now.sh';

export const Urls = {
  FEEDBACK: `${BASE}/feedback`
};
