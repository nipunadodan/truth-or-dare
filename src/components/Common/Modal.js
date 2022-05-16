import { Dialog, Transition } from '@headlessui/react'
import {Fragment, useEffect, useState} from 'react'
import {createMarkup} from "../../Helpers";

export default function Modal(props) {
    let [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{
        setIsOpen(props.isOpen)
    },[props.isOpen])

    function closeModal() {
        setIsOpen(false)
        props.closeModal(false)
        //props.func()
    }

    const actionButton = () => {
        props.func()
        closeModal()
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black/30" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <div
                            className="inline-block h-screen bg-black/30 align-middle"
                            aria-hidden="true"
                        />
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md px-8 py-12 my-8 overflow-hidden text-left align-middle transition-all transform bg-neutral-50 dark:bg-neutral-700 shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-3xl md:text-4xl font-medium leading-10 text-gray-900 dark:text-gray-100 text-center mt-8 mb-4"
                                >
                                    {props.modal.title}
                                </Dialog.Title>
                                <div className="mt-2 mb-16 text-center">
                                    <div className="text-sm text-gray-700 dark:text-gray-100" dangerouslySetInnerHTML={createMarkup(props.modal.content)} />
                                </div>

                                <div className="mt-4 text-center">
                                    <span onClick={closeModal} className={'button text-gray-700 dark:text-gray-100 cursor-pointer'}>Close</span>
                                    <button
                                        type="button"
                                        className="inline-block text-center button border border-red-500 px-10 text-white bg-red-500 hover:bg-red-600"
                                        onClick={actionButton}
                                        dangerouslySetInnerHTML={createMarkup(props.modal.buttonText)}
                                    />
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
