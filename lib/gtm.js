export const GTM_ID = 'GTM-MCXW7Z5'

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}