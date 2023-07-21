import { CollectionConfig } from 'payload/types'

export const OnCallComplaints: CollectionConfig = {
    slug: 'OnCallComplaints',
    fields: [
        {
            name: 'name',
            type: 'text',
        },
        {
            name: 'content',
            label: 'Content',
            type: 'richText',
            admin: {
                className: 'labelEnlarge',
            },
        },
    ],
}

export default OnCallComplaints
