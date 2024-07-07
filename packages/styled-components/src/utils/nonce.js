// @flow
/* eslint-disable camelcase, no-undef */

const getNonce = () => {
  const nonce = typeof window !== 'undefined' ? window.nonce : null;
  console.log(nonce)
  return nonce
};

export default getNonce;
