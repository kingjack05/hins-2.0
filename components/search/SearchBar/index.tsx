import { Fragment, useState } from 'react'
import { Combobox } from '@headlessui/react'
import Fuse from 'fuse.js'
import { useRouter } from 'next/router'
import Image from 'next/image'
import classes from './searchBar.module.css'
import SearchIcon from '../../../public/icons/search.svg'

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
            <div className="w-[400px] flex justify-center items-center relative">
                <Combobox.Input
                    onChange={event => setQuery(event.target.value)}
                    className={classes.searchBarInput}
                />
                <div className={classes.searchIcon}>
                    <svg width={24} height={24}>
                        <use
                            href={`${SearchIcon}#icon`}
                            width={24}
                            height={24}
                        />
                    </svg>
                </div>
            </div>
            <div className="w-[400px] absolute max-h-56 overflow-auto">
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
            </div>
        </Combobox>
    )
}
