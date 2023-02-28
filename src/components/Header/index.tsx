import { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import logo from "../../assets/imgs/logo/logo.svg";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-green-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img className="h-12 w-12" src={logo} alt="Workflow" />
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="text-base font-medium text-white hover:text-green-600"
                >
                  Início
                </a>
                <a
                  href="/#sobre"
                  className="text-base font-medium text-white hover:text-green-600"
                >
                  Sobre
                </a>
                <a
                  href="/#projetos"
                  className="text-base font-medium text-white hover:text-green-600"
                >
                  Projetos
                </a>
                <a
                  href="/#colaboradores"
                  className="whitespace-nowrap text-base font-medium text-white hover:text-green-600"
                >
                  Colaboradores
                </a>
                <a
                  href="/#contribuicoes"
                  className="whitespace-nowrap text-base font-medium text-white hover:text-green-600"
                >
                  Contribuições
                </a>
              </div>
            </div>
          </div>
          <div className="mx-4 hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="/vocalizador"
              className="ml-4 font-primary inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-neutral-900 shadow-sm hover:bg-orange-primary hover:text-white"
            >
              Vocalizador
            </a>
            <a
              href="/prancha"
              className="ml-4 font-primary inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-neutral-900 hover:bg-orange-primary hover:text-white"
            >
              Prancha
            </a>
            <a
              href="/rotina"
              className="ml-4 font-primary inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-neutral-900 hover:bg-orange-primary hover:text-white"
            >
              Rotina
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
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
                  <path d="M6 18L18 6M6 6l12 12" />
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
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="flex items-center justify-center gap-4">
              <Link to="/vocalizador"><a
                href="/vocalizador"
                className="items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white px-2 py-2 text-base font-medium text-neutral-900  hover:bg-orange-primary hover:text-white"
              >
                Vocalizador
              </a></Link>
              <Link to="/prancha"><a
                href="/prancha"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white px-2 py-2 text-base font-medium text-neutral-900 hover:bg-orange-primary hover:text-white"
              >
                Prancha
              </a></Link>
              <Link to="/rotina"><a
                href="/rotina"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white px-2 py-2 text-base font-medium text-neutral-900 hover:bg-orange-primary hover:text-white"
              >
                Rotina
              </a></Link>
            </div>
            <a
              href="/"
              className="text-white hover:bg-orange-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Início
            </a>

            <a
              href="/#sobre"
              className="text-white hover:bg-orange-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Sobre
            </a>

            <a
              href="/#projetos"
              className="text-white hover:bg-orange-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projetos
            </a>

          

            <a
              href="/#colaboradores"
              className="text-white hover:bg-orange-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Colaboradores
            </a>

            <a
              href="/#contribuicoes"
              className="text-white hover:bg-orange-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contribuições
            </a>
 
          </div>
        </div>
      </Transition>
    </nav>
  );
}
