import { GetServerSideProps } from 'next'
import Page, {
    getServerSideProps as sharedGetServerSideProps,
} from './[...slug]'

export default () => <>Hello</>

export const getServerSideProps: GetServerSideProps = async ctx => {
    const func = sharedGetServerSideProps.bind(this)
    return func(ctx)
}
