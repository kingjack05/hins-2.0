import { CollectionConfig } from 'payload/types'

export const Orders: CollectionConfig = {
    slug: 'Orders',
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

export default Orders
