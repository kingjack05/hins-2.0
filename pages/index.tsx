import { GetStaticProps } from 'next'
import Link from 'next/link'
import payload from 'payload'
import Head from '../components/Head'
import { Header } from '../components/Header'
import { ButtonAndSearchModal } from '../components/search/SearchModal'
import { categories, slugToLabel } from './category/[slug]'

export default ({ diagnoses }) => (
    <>
        <Head title="Clinical Note Templates" />
        <Header />
        <main className="mx-4 mt-10 flex flex-col justify-center items-center">
            <div>
                <ButtonAndSearchModal items={diagnoses} />
            </div>
            <div className="flex flex-wrap gap-2 justify-center  bg-primary-content ">
                {categories.map((item, i) => (
                    <Link href={'/category/' + item.name} key={i}>
                        <div className="link link-hover shrink-0">
                            <div className="flex justify-center prose-lg">
                                {slugToLabel(item.name)}
                            </div>
                            <div>
                                <img
                                    className="w-48 h-32"
                                    src={'/images/' + item.name + '.jpg'}
                                    alt={item.name}
                                />
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
