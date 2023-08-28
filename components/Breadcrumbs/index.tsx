import Link from 'next/link'
import classes from './styles.module.css'

export const Breadcrumbs = ({ pageLevels }) => {
    const elements = pageLevels.map((pageLevel, index) => (
        <span className={classes.breadcrumb} key={index + 1}>
            <Link href={pageLevel.href}>{pageLevel.name}</Link>
        </span>
    ))
    elements.unshift(
        <span className={classes.breadcrumb} key={0}>
            <Link href="/">Home</Link>
        </span>,
    )
    return <div className={classes.breadcrumbs}>{elements}</div>
}
