import React from 'react'
import { UserProvider } from '@auth0/nextjs-auth0/client'

import type { AppProps } from 'next/app'

import '../css/style.css'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
    <UserProvider>
        <Component {...pageProps} />
    </UserProvider>
)

export default MyApp
