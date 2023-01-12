import Link from 'next/link'
import payload from 'payload'
import { Header } from '../../components/Header'
import { categories } from '../category/[slug]'

const SpecialtyPage = ({ diagnoses }) => {
    return (
        <>
            <Header />
            <main className="mt-5 ml-10">
                {diagnoses.map((item, i) => (
                    <div key={i} className="link link-primary mb-2">
                        <Link href={'/diagnosis/' + item.slug}>
                            {item.name}
                        </Link>
                    </div>
                ))}
            </main>
        </>
    )
}

export default SpecialtyPage

export async function getStaticPaths() {
    const slugs = []
    categories.forEach(category => {
        category.subspecialties.forEach(subspecialty =>
            slugs.push({ params: { slug: subspecialty } }),
        )
    })
    return {
        paths: slugs,
        // paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const slug = params.slug

    const searchResult = await payload.find({
        collection: 'diagnosis',
        where: {
            specialty: {
                equals: slug,
            },
        },
    })

    const diagnoses = searchResult.docs
    // console.log(diagnoses)

    return { props: { slug, diagnoses } }
}
