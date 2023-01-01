import { CollectionConfig } from 'payload/types'

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
        { name: 'admission_note', label: 'Admission Note', type: 'richText' },
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
        { name: 'summary_note', label: 'Summary Note', type: 'richText' },
        { name: 'risk_factors', label: 'Risk Factors', type: 'richText' },
        {
            name: 'physical_examintaion',
            label: 'Physical Examination',
            type: 'richText',
        },
        { name: 'lab', label: 'Lab', type: 'richText' },
        { name: 'imaging', label: 'Imaging', type: 'richText' },
        { name: 'plan', label: 'Plan', type: 'richText' },
        {
            name: 'figures',
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
    ],
}

export default Diagnosis
