const BASE =
  process.env.NODE_ENV === 'production'
    ? 'https://feedback360api.now.sh'
    : 'http://localhost:5000';

export const Urls = {
  FEEDBACK: `${BASE}/feedback`
};
