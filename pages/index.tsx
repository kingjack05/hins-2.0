import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Head from '../components/Head'
import { Header } from '../components/Header'
import { SearchBar } from '../components/search/SearchBar'
import { categories, slugToLabel } from './category/[slug]'
import Page, {
    getServerSideProps as sharedGetServerSideProps,
} from './[...slug]'

export default () => (
    <>
        <Head title="Clinical Note Templates" />
        <Header />
        <main className="mx-4 mt-10 flex flex-col justify-center items-center">
            <div>
                <SearchBar />
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

export const getServerSideProps: GetServerSideProps = async ctx => {
    const func = sharedGetServerSideProps.bind(this)
    return func(ctx)
}
