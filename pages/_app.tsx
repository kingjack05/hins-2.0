import React from 'react'
import { UserProvider } from '@auth0/nextjs-auth0/client'

import '../css/reset.css'
import '../css/fontface.css'
import '../css/all.css'

const MyApp = ({ Component, pageProps }): React.ReactElement => (
    <UserProvider>
        <Component {...pageProps} />
    </UserProvider>
)

export default MyApp
