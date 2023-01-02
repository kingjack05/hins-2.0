import { CollectionConfig } from 'payload/types'
import formatSlug from '../utilities/formatSlug'

const Diagnosis: CollectionConfig = {
    slug: 'diagnosis',
    access: {
        read: (): boolean => true, // Everyone can read Diagnosis
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            label: 'Diagnosis Name',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'admission_note',
            label: 'ADMISSION NOTE',
            type: 'richText',
            admin: {
                className: 'labelEnlarge',
            },
        },
        {
            name: 'progress_note',
            label: 'PROGRESS NOTE',
            type: 'group',
            fields: [
                {
                    name: 'subjective',
                    label: 'Subjective',
                    type: 'richText',
                },
                {
                    name: 'objective',
                    label: 'Objective',
                    type: 'richText',
                },
                {
                    name: 'assessment',
                    label: 'Assessment',
                    type: 'richText',
                },
                {
                    name: 'plan',
                    label: 'Plan',
                    type: 'richText',
                },
            ],
        },
        {
            name: 'summary_note',
            label: 'SUMMARY NOTE',
            type: 'richText',
            admin: {
                className: 'labelEnlarge',
            },
        },
        {
            name: 'risk_factors',
            label: 'RISK FACTORS',
            type: 'richText',
            admin: {
                className: 'labelEnlarge',
            },
        },
        {
            name: 'physical_examintaion',
            label: 'PHYSICAL EXAMINATION',
            type: 'richText',
            admin: {
                className: 'labelEnlarge',
            },
        },
        {
            name: 'lab',
            label: 'LAB',
            type: 'richText',
            admin: {
                className: 'labelEnlarge',
            },
        },
        {
            name: 'imaging',
            label: 'IMAGING',
            type: 'richText',
            admin: {
                className: 'labelEnlarge',
            },
        },
        {
            name: 'plan',
            label: 'PLAN',
            type: 'richText',
            admin: {
                className: 'labelEnlarge',
            },
        },
        {
            name: 'figures',
            label: 'FIGURES',
            type: 'array',
            fields: [
                {
                    name: 'figure',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
        {
            name: 'slug',
            label: 'Page Slug',
            type: 'text',
            admin: {
                position: 'sidebar',
                description: ({ value }) =>
                    `http://localhost:3000/diagnosis/${value}`,
            },
            hooks: {
                beforeValidate: [formatSlug('name')],
            },
        },
    ],
}

export default Diagnosis
