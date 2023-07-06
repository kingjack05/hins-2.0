import { CollectionConfig } from 'payload/types'
import { categories, slugToLabel } from '../pages/category/[slug]'
import formatSlug from '../utilities/formatSlug'

const specialtyOptions = []
categories.forEach(category => {
    category.subspecialties.forEach(subspecialty => {
        specialtyOptions.push({
            value: subspecialty,
            label: slugToLabel(subspecialty),
        })
    })
})

const Diagnosis: CollectionConfig = {
    slug: 'diagnosis',
    access: {
        read: (): boolean => true, // Everyone can read Diagnosis
    },
    admin: {
        useAsTitle: 'name',
        listSearchableFields: ['specialty'],
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
            name: 'specialty',
            label: 'Specialty',
            type: 'select',
            options: specialtyOptions,
        },
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'History',
                    fields: [
                        {
                            name: 'history',
                            label: 'HISTORY',
                            type: 'richText',
                            admin: {
                                className: 'labelEnlarge',
                            },
                        },
                    ],
                },
                {
                    label: 'PE',
                    fields: [
                        {
                            name: 'physical_examintaion',
                            label: 'PHYSICAL EXAMINATION',
                            type: 'richText',
                            admin: {
                                className: 'labelEnlarge',
                            },
                        },
                    ],
                },
                {
                    label: 'Lab',
                    fields: [
                        {
                            name: 'lab',
                            label: 'LAB',
                            type: 'richText',
                            admin: {
                                className: 'labelEnlarge',
                            },
                        },
                    ],
                },
                {
                    label: 'Imaging',
                    fields: [
                        {
                            name: 'imaging',
                            label: 'IMAGING',
                            type: 'richText',
                            admin: {
                                className: 'labelEnlarge',
                            },
                        },
                    ],
                },
                {
                    label: 'Plan',
                    fields: [
                        {
                            name: 'plan',
                            label: 'PLAN',
                            type: 'richText',
                            admin: {
                                className: 'labelEnlarge',
                            },
                        },
                    ],
                },
                {
                    label: 'Admission',
                    fields: [
                        {
                            name: 'admission_note',
                            label: 'ADMISSION NOTE',
                            type: 'richText',
                            admin: {
                                className: 'labelEnlarge',
                            },
                        },
                    ],
                },
                {
                    label: 'Progress',
                    fields: [
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
                    ],
                },
                {
                    label: 'Complications',
                    fields: [
                        {
                            name: 'complications',
                            label: 'COMPLICATIONS',
                            type: 'richText',
                            admin: {
                                className: 'labelEnlarge',
                            },
                        },
                    ],
                },
            ],
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
            type: 'tabs',
            tabs: [
                {
                    label: 'Etiology',
                    fields: [
                        {
                            name: 'etiology',
                            label: 'Etiology',
                            type: 'richText',
                            admin: {
                                className: 'labelEnlarge',
                            },
                        },
                    ],
                },
                {
                    label: 'Risk',
                    fields: [
                        {
                            name: 'risk_factors',
                            label: 'Risk Factors',
                            type: 'richText',
                            admin: {
                                className: 'labelEnlarge',
                            },
                        },
                    ],
                },
                {
                    label: 'Differential Diagnosis',
                    fields: [
                        {
                            name: 'differential_diagnosis',
                            label: 'Differential Diagnosis',
                            type: 'richText',
                            admin: {
                                className: 'labelEnlarge',
                            },
                        },
                    ],
                },
                {
                    label: 'Clinical Notes',
                    fields: [
                        {
                            name: 'clinical_notes',
                            label: 'Clinical Notes',
                            type: 'array',
                            fields: [{ name: 'content', type: 'richText' }],
                        },
                    ],
                },
                {
                    label: 'Reference',
                    fields: [
                        {
                            name: 'reference',
                            label: 'Reference',
                            type: 'richText',
                            admin: {
                                className: 'labelEnlarge',
                            },
                        },
                    ],
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
