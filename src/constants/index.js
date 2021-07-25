export const BASE_URL = 'https://pdimp.herokuapp.com';

/**
 * @type {Readonly<Object.<string, {name: string, url: string, description: string}>>}
 */
export const APPS = Object.freeze({
  MEET_FE: {
    name: 'Jitsi Meet',
    url: `${BASE_URL}/meet`,
  },
  MEET_BE: {
    name: 'Jitsi Meet Backend',
    url: `${BASE_URL}/meet/api`,
  },
  MORSKOGRAM: {
    name: 'MorskoGram',
    url: 'https://morskogram.herokuapp.com',
  },
  GOOGLE: {
    name: 'Google',
    url: `${BASE_URL}/google`,
  },
});
