import { useEffect, useState, useRef } from 'react'

export function useHeadsObserver() {
    const observer = useRef<IntersectionObserver>()
    const [activeId, setActiveId] = useState('')

    useEffect(() => {
        const handleObsever = entries => {
            entries.forEach(entry => {
                if (entry?.isIntersecting) {
                    setActiveId(entry.target.id)
                }
            })
        }

        observer.current = new IntersectionObserver(handleObsever, {
            rootMargin: '-5% 0% -55% 0px',
        })

        const elements = document.querySelectorAll('h2, h3, h4')
        elements.forEach(elem => observer.current.observe(elem))
        return () => observer.current?.disconnect()
    }, [])

    return { activeId }
}
