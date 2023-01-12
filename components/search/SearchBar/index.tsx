import { Fragment, useState } from 'react'
import { Combobox } from '@headlessui/react'
import Fuse from 'fuse.js'
import { useRouter } from 'next/router'

export const SearchBar = ({ items, searchKeys }) => {
    const [selectedOption, setSelectedOption] = useState(items[0])
    const fuse = new Fuse(items, { keys: searchKeys })
    const [query, setQuery] = useState('')
    const searchResults: Fuse.FuseResult<any>[] = fuse.search(query)
    const router = useRouter()
    const onSelected = value => {
        router.push('/diagnosis/' + value)
    }

    return (
        <Combobox value={selectedOption} onChange={onSelected}>
            <div className="flex justify-center items-center">
                <Combobox.Input
                    onChange={event => setQuery(event.target.value)}
                    className="input w-full"
                    placeholder="Search diagnosis"
                />
            </div>
            <Combobox.Options>
                {searchResults.map((result, i) => (
                    <Combobox.Option
                        key={i}
                        value={result.item.slug}
                        as={Fragment}
                    >
                        {({ active }) => (
                            <li
                                className={
                                    `${
                                        active
                                            ? 'bg-primary text-white'
                                            : 'bg-white text-black'
                                    }` +
                                    ' rounded-md h-10 flex items-center mt-4 pl-2'
                                }
                            >
                                {result.item.name}
                            </li>
                        )}
                    </Combobox.Option>
                ))}
            </Combobox.Options>
        </Combobox>
    )
}
