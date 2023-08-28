import { GetStaticProps } from 'next'
import Link from 'next/link'
import payload from 'payload'
import Head from '../components/Head'
import { Header } from '../components/Header'
import { categories, slugToLabel } from './category/[slug]'
import { SearchBar } from '../components/search/SearchBar'

export default ({ diagnoses }) => (
    <>
        <Head title="Clinical Note Templates" />
        <Header />
        <main className="mx-4 mt-10 flex flex-col justify-center items-center">
            <div className="mt-48">
                <SearchBar items={diagnoses} searchKeys={['name']} />
            </div>
            <div className="flex flex-wrap gap-2 justify-center mt-60">
                <div className="px-8" style={{ color: 'var(--gray-400)' }}>
                    Explore:
                </div>
                {categories.map((item, i) => (
                    <Link href={'/category/' + item.name} key={i}>
                        <div className="link link-hover shrink-0 px-8">
                            <div className="flex justify-center">
                                {slugToLabel(item.name)}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    </>
)

export const getStaticProps: GetStaticProps = async () => {
    const diagnoses = await (
        await payload.find({ collection: 'diagnosis' })
    ).docs
    return {
        props: { diagnoses },
    }
}
