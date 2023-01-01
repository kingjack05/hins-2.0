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
        },
        { name: 'admission_note', label: 'ADMISSION NOTE', type: 'richText' },
        {
            name: 'progress_note',
            label: 'Progress Note',
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
        { name: 'summary_note', label: 'SUMMARY NOTE', type: 'richText' },
        { name: 'risk_factors', label: 'RISK FACTORS', type: 'richText' },
        {
            name: 'physical_examintaion',
            label: 'PHYSICAL EXAMINATION',
            type: 'richText',
        },
        { name: 'lab', label: 'LAB', type: 'richText' },
        { name: 'imaging', label: 'IMAGING', type: 'richText' },
        { name: 'plan', label: 'PLAN', type: 'richText' },
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
