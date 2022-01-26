import Navbar from "../commonds/Navbar"

function Dashboard(){
    return (
        <div className="min-h-full">
            <Navbar/>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-green-500">
                    Dashboard
                </h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                            <div className="grid grid-rows-1">
                                <div className="grid grid-cols-4">
                                    <div className="w-100 border-2 border-green-400 flex flex-col justify-center items-center rounded-md">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 my-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="font-bold text-green-300">Products manager</span>
                                        </div>
                                    </div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </main>
        </div>

    )
}

export default Dashboard