export const GTM_ID = 'G-ZK2BP34EQX5'

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}