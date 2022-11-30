import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../../assets/imgs/logo/logo.svg";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-green-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src={logo} alt="Workflow" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="text-base font-medium text-white-primary hover:text-green-600"
                  >
                    Início
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-white-primary hover:text-green-600"
                  >
                    Preferências
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-white-primary hover:text-green-600"
                  >
                    Projetos
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-white-primary hover:text-green-600"
                  >
                    Projetos
                  </a>
                  <a
                    href="#"
                    className="whitespace-nowrap text-base font-medium text-white-primary hover:text-green-600"
                  >
                    Telas
                  </a>
                  <a
                    href="#"
                    className="whitespace-nowrap text-base font-medium text-white-primary hover:text-green-600"
                  >
                    Colaboradores
                  </a>
                </div>
              </div>
            </div>
            <div className="mx-4 hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <a
                href="#"
                className="ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white-primary px-4 py-2 text-base font-medium text-neutral-900 shadow-sm hover:bg-orange-primary hover:text-white-primary"
              >
                Vocalizador
              </a>
              <a
                href="#"
                className="ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white-primary px-4 py-2 text-base font-medium text-neutral-900 hover:bg-orange-primary hover:text-white-primary"
              >
                Prancha
              </a>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-white-primary p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="text-white-primary hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-white-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-white-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-white-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-white-primary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
                <div className="flex items-center justify-center">
                  <a
                    href="#"
                    className="items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white-primary px-2 py-2 text-base font-medium text-neutral-900 shadow-sm hover:bg-orange-primary hover:text-white-primary"
                  >
                    Vocalizador
                  </a>
                  <a
                    href="#"
                    className="mx-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white-primary px-2 py-2 text-base font-medium text-neutral-900 hover:bg-orange-primary hover:text-white-primary"
                  >
                    Prancha
                  </a>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
