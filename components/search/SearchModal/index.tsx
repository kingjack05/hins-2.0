import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { SearchBar } from '../SearchBar'

const useSearchModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }

    const openModalOnShortcut = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault()
            openModal()
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', openModalOnShortcut)
        return () => {
            window.removeEventListener('keydown', openModalOnShortcut)
        }
    }, [])

    return { isOpen, closeModal, openModal }
}

export const ButtonAndSearchModal = props => {
    const { isOpen, openModal, closeModal } = useSearchModal()

    return (
        <>
            <button
                {...props}
                className="flex items-center input input-bordered w-80 mb-10 hover:font-semibold hover:stroke-2"
                onClick={openModal}
            >
                <div className="flex justify-start w-3/5">
                    <svg className=" w-6 h-6" viewBox="0 0 20 20">
                        <path
                            d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                            stroke="currentColor"
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <span className="pl-3">Search</span>
                </div>
                <div className="flex justify-end w-2/5 items-center">
                    <kbd className="kbd">Ctrl</kbd>+<kbd className="kbd">K</kbd>
                </div>
            </button>

            <Dialog
                open={isOpen}
                onClose={closeModal}
                className="relative z-50"
            >
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-sm sm:max-w-xl rounded bg-white p-4">
                        <SearchBar items={props.items} searchKeys={['name']} />
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}
