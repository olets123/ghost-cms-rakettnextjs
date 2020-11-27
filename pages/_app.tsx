import '../styles/globals.scss'
import Layout from '../components/Layout'
import { AppProps } from 'next/app'
import { Flipper, Flipped } from 'react-flip-toolkit'

function CustomApp({ Component, pageProps, router }: AppProps): JSX.Element {
	return (
	  <Flipper flipKey={router.asPath} spring="gentle">
		<Layout>
		  <Flipped flipId="page">
			<div>
			  <Component {...pageProps} />
			</div>
		  </Flipped>
		</Layout>
	  </Flipper>
	)
  }
  
  export default CustomApp

/*
export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
	
} */
