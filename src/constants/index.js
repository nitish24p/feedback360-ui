const BASE =
  process.env.NODE_ENV === 'production'
    ? 'https://feedback360api.now.sh'
    : 'http://feedback360api.now.sh';

export const Urls = {
  FEEDBACK: `${BASE}/feedback`
};
