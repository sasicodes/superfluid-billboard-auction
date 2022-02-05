import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

type Props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<boolean>
  children: React.ReactElement
  title: string
}

export default function Modal({ title, children, isOpen, setIsOpen }: Props) {
  function closeModal() {
    setIsOpen(false)
  }
  return (
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
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 opacity-70" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-5 overflow-hidden text-left align-middle transition-all transform bg-black shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="mb-4 text-lg font-medium leading-6"
              >
                {title}
              </Dialog.Title>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
