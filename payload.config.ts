import { buildConfig } from 'payload/config'
import dotenv from 'dotenv'
import path from 'path'

import Page from './collections/Page'
import Media from './collections/Media'
import Diagnosis from './collections/Diagnosis'
import ChiefComplaint from './collections/ChiefComplaint'
import OnCallComplaints from './collections/OnCallComplaints'
import Orders from './collections/Orders'

dotenv.config()

export default buildConfig({
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    collections: [
        ChiefComplaint,
        Diagnosis,
        OnCallComplaints,
        Orders,
        Page,
        Media,
    ],
    admin: {
        css: path.resolve(__dirname, './css/admin.scss'),
    },
})
