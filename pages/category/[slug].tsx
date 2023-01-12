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
    { name: 'surgery', subspecialties: ['neurosurgery', 'thoracic_surgery'] },
    { name: 'obgyn', subspecialties: [] },
    { name: 'pediatrics', subspecialties: [] },
    { name: 'others', subspecialties: [] },
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
