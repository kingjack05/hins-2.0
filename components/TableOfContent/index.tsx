import { useEffect, useState } from 'react'
import classes from './index.module.css'

// const getClassName = level => {
//     switch (level) {
//         case 2:
//             return 'head2'
//         case 3:
//             return 'head3'
//         case 4:
//             return 'head4'
//         default:
//             return null
//     }
// }

function TableOfContent() {
    const [headings, setHeadings] = useState([])
    useEffect(() => {
        const elements = Array.from(
            document.querySelectorAll('section.putInTOC'),
        ).map(elem => {
            return { id: elem.id, text: elem.getAttribute('data-name') }
            // text: elem.textContent,
            // level: Number(elem.nodeName.charAt(1)),
        })
        setHeadings(elements)

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id')
                if (entry.intersectionRatio > 0) {
                    document
                        .querySelector(`nav li a[href="#${id}"]`)
                        .parentElement.classList.add(classes.active)
                } else {
                    document
                        .querySelector(`nav li a[href="#${id}"]`)
                        .parentElement.classList.remove(classes.active)
                }
            })
        })

        // Track all sections that have class putInTOC
        document.querySelectorAll('section.putInTOC').forEach(section => {
            observer.observe(section)
        })
    }, [])

    return (
        <nav className={classes.toc}>
            <ul>
                {headings.map((heading, index) => (
                    <li
                        key={index}
                        // className={classes[getClassName(heading.level)]}
                    >
                        <a
                            href={`#${heading.id}`}
                            className={classes.tocItem}
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
