import Link from 'next/link'
import { Header } from '../../components/Header'

export const categories = [
    {
        name: 'medicine',
        subspecialties: [
            'neurology',
            'cardiology',
            'chest_medicine',
            'gastroenterology',
            'neprhology',
            'hematology',
            'oncology',
            'infection',
            'endocrinology',
            'rheumatology',
        ],
    },
    {
        name: 'surgery',
        subspecialties: [
            'neurosurgery',
            'cardiovascular_surgery',
            'thoracic_surgery',
            'general_surgery',
            'colorectal_surgery',
            'urology',
            'pediatric_surgery',
            'plastic_surgery',
        ],
    },
    {
        name: 'obgyn',
        subspecialties: [
            'general_gynecology',
            'gynecological_reproductive_endocrinology',
            'urogynecology',
            'gynecologic_oncology',
            'obstetrics',
        ],
    },
    {
        name: 'pediatrics',
        subspecialties: [
            'pediatric_neurology',
            'pediatric_cardiology',
            'pediatric_chest_medicine',
            'pediatric_gastroenterology',
            'pediatric_neprhology',
            'pediatric_hematology',
            'pediatric_oncology',
            'pediatric_infection',
            'pediatric_endocrinology',
            'pediatric_rheumatology',
            'medical_genetics',
        ],
    },
    // {
    //     name: 'others',
    //     subspecialties: [
    //         'dermatology',
    //         'rehabilitation',
    //         'ENT',
    //         'ophthalmology',
    //         'orthopedics',
    //     ],
    // },
]

export const slugToLabel = slug => {
    const firstLetterCapped = slug.charAt(0).toUpperCase() + slug.slice(1)
    const underscoreRemoved = firstLetterCapped.replace(/_/g, ' ')
    return underscoreRemoved
}

const CategoryPage = ({ slug, subspecialties }) => {
    return (
        <>
            <Header />
            <main className="mt-5 ml-10">
                {subspecialties.map((item, i) => (
                    <div key={i} className="link link-primary mb-2">
                        <Link href={'/specialty/' + item}>
                            {slugToLabel(item)}
                        </Link>
                    </div>
                ))}
            </main>
        </>
    )
}

export default CategoryPage

export async function getStaticPaths() {
    const slugs = categories.map(item => {
        return { params: { slug: item.name } }
    })
    return {
        paths: slugs,
        // paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const slug = params.slug
    const subspecialties = categories.find(
        item => item.name === slug,
    ).subspecialties
    return { props: { slug, subspecialties } }
}
