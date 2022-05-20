import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import * as ga from '../lib/analytics'

export function reportWebVitals({ id, name, label, value }) {
  if (label === 'web-vital') {
    console.log(id,name,value,label) // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }

    // Use `window.gtag` if you initialized Google Analytics as this example:
  // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js
  window.gtag('event', name, {
    event_category:
    label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  })
}


function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  return (
      <Component
        {...pageProps}
        key={route}
      />
  )
}

export default MyApp