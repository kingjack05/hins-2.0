import { buildConfig } from 'payload/config'
import dotenv from 'dotenv'
import path from 'path'

import Page from './collections/Page'
import Media from './collections/Media'
import Diagnosis from './collections/Diagnosis'
import ChiefComplaint from './collections/ChiefComplaint'

dotenv.config()

export default buildConfig({
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    collections: [Page, Media, Diagnosis, ChiefComplaint],
    admin: {
        css: path.resolve(__dirname, './css/admin.scss'),
    },
})
