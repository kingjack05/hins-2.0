import { useEffect, useState } from 'react'
import styles from './index.module.css'

const getClassName = level => {
    switch (level) {
        case 2:
            return 'head2'
        case 3:
            return 'head3'
        case 4:
            return 'head4'
        default:
            return null
    }
}

function TableOfContent() {
    const [headings, setHeadings] = useState([])
    useEffect(() => {
        const elements = Array.from(
            document.querySelectorAll('h2, h3, h4'),
        ).map(elem => ({
            id: elem.id,
            text: elem.textContent,
            level: Number(elem.nodeName.charAt(1)),
        }))
        setHeadings(elements)
    }, [])

    return (
        <nav className={styles.toc}>
            <ul>
                {headings.map((heading, index) => (
                    <li
                        key={index}
                        className={styles[getClassName(heading.level)]}
                    >
                        <a
                            href={`#${heading.id}`}
                            className={styles.tocItem}
                            onClick={e => {
                                e.preventDefault()
                                document
                                    .querySelector(`#${heading.id}`)
                                    .scrollIntoView({
                                        behavior: 'smooth',
                                    })
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default TableOfContent
