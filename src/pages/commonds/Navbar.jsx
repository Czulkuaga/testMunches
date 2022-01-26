function Navbar(){
    return (
        <nav className="bg-green-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                        </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a className="bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                        <div id='user-menu' className="cursor-pointer mt-2 w-36 rounded-md shadow-lg py-1 bg-dark ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                            <a className="block px-4 py-2 text-sm text-white text-center" role="menuitem" id="user-menu-item-2">Sign out</a>
                        </div>
                    </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button  */}
                    <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        
                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu show/hidden aften menu state */}
            <div className="md:hidden" id="mobile-menu">
            {/* <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
            </div> */}
            <div className='pb-3 border-t border-gray-700'>
                <div className="mt-3 px-2 space-y-1">
                    <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar