import { HomeIcon, DocumentTextIcon, DocumentIcon, CogIcon} from '@heroicons/react/outline';

export default function SideBar(){
    return (
    
        <div className="bg-gray-100 shadow z-index-1 md:flex-col justify-between   transition duration-150 ease-in-out" id="mobile-nav">
        <ul className="mt-12 padding-20 ml-0 height-100 md: mt-12 ml-4">
        <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-2">
            <div className="flex items-center padding-10">
            <HomeIcon className="h-5 w-5 text-gray-400 z-20 hover:text-gray-500" aria-hidden="true" />
                <span className="text-sm  ml-2  hidden md:block">Dashboard</span>
            </div>
           
        </li>
        <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-2">
            <div className="flex items-center acivated-table md:activated-sidebar shadow" >
                <DocumentTextIcon className="h-5 w-5 text-green-400 z-20 hover:text-gray-500" aria-hidden="true" />
                <span className="text-sm  ml-2 hidden md:block">Inventory</span>
            </div>
           
        </li>
        <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-2">
            <div className="flex items-center padding-10">
            <DocumentIcon className="h-5 w-5 text-gray-400 z-20 hover:text-gray-500" aria-hidden="true" />
                <span className="text-sm  ml-2  hidden md:block">Documents</span>
            </div>
           
        </li>
        <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-2">
            <div className="flex items-center padding-10">
                <CogIcon className="h-5 w-5 text-gray-400 z-20 hover:text-gray-500" aria-hidden="true" />
                <span className="text-sm  ml-2  hidden md:block">Settings</span>
            </div>
           
        </li>
     
    
    </ul>
    </div>

    )
}