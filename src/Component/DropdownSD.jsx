import { Menu, Transition } from '@headlessui/react'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function DropdownSD() {
  return (
    <div className="mt-8 mr-16 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-48 rounded-2xl bg-secondary px-4 py-2 text-lg font-medium text-white hover:bg-primary">
            Hubungi
            <ChevronDownIcon
              className="ml-14 mt-1 h-5 w-5"
            />
          </Menu.Button>
        </div>
          <Menu.Items className="absolute mt-2 right-0 w-48 rounded-2xl bg-secondary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                  <button className='group flex w-full items-center rounded-2xl px-2 py-2 text-sm text-white  bg-secondary hover:bg-primary'>Chat</button>
              </Menu.Item>
              <Menu.Item>
                  <button className='group flex w-full items-center rounded-2xl px-2 py-2 text-sm text-white bg-secondary hover:bg-primary'>Contact</button>
              </Menu.Item>
            </div>
          </Menu.Items>
      </Menu>
    </div>
  )
}
