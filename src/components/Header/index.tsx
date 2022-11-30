import logo from '../../assets/imgs/logo/logo.svg'
export function Header(){
   return(
<header className="App-header">
      <div className="relative bg-green-primary shadow">
  <div className="mx-auto max-w-7xl px-4 sm:px-6">
    <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <a href="#">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto sm:h-10" src={logo} alt=""/>
        </a>
      </div>
      <div className="-my-2 -mr-2 md:hidden">
        <button type="button" className="inline-flex items-center justify-center rounded-md bg-white-primary p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
          <span className="sr-only">Open menu</span>
          {/* <!-- Heroicon name: outline/bars-3 --> */}
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <nav className="hidden space-x-10 md:flex">
        <a href="#" className="text-base font-medium text-white-primary hover:text-green-600">Início</a>
        <a href="#" className="text-base font-medium text-white-primary hover:text-green-600">Preferências</a>
        <a href="#" className="text-base font-medium text-white-primary hover:text-green-600">Projetos</a>
        <a href="#" className="text-base font-medium text-white-primary hover:text-green-600">Projetos</a>
        <a href="#" className="whitespace-nowrap text-base font-medium text-white-primary hover:text-green-600">Telas</a>
        <a href="#" className="whitespace-nowrap text-base font-medium text-white-primary hover:text-green-600">Colaboradores</a>
      </nav>
      <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
        {/* <a href="#" className="whitespace-nowrap text-base font-medium text-white hover:text-green-600">Vocalizador</a> */}
        <a href="#" className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white-primary px-4 py-2 text-base font-medium text-neutral-900 shadow-sm hover:bg-orange-primary hover:text-white-primary">Vocalizador</a>
        <a href="#" className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white-primary px-4 py-2 text-base font-medium text-neutral-900 hover:bg-orange-primary hover:text-white-primary">Prancha</a>
      </div>
    </div>
  </div>

  <div className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white-primary shadow-lg ring-1 ring-black ring-opacity-5">
      <div className="px-5 pt-5 pb-6">
        <div className="flex items-center justify-between">
          <div>
            <img className="h-8 w-auto" src={logo} alt="Your Company"/>
          </div>
          <div className="-mr-2">
            <button type="button" className="inline-flex items-center justify-center rounded-md bg-white-primary p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Close menu</span>
              {/* <!-- Heroicon name: outline/x-mark --> */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-6">
          <nav className="grid gap-y-8">
            <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <span className="ml-3 text-base font-medium text-gray-900">Analytics</span>
            </a>

            <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <span className="ml-3 text-base font-medium text-gray-900">Engagement</span>
            </a>

            <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <span className="ml-3 text-base font-medium text-gray-900">Security</span>
            </a>

            <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <span className="ml-3 text-base font-medium text-gray-900">Integrations</span>
            </a>

            <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <span className="ml-3 text-base font-medium text-gray-900">Automations</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
</header>
   ) 
}