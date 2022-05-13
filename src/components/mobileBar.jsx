import { HomeIcon, DocumentTextIcon, DocumentIcon, CogIcon} from '@heroicons/react/outline';
export default function MobileBar() {
    return (
        <div className='flex bg-white mobile-bar padding-20'>
           <div className="flex items-center padding-10">
            <HomeIcon className="h-7 w-7 text-gray-400 z-20 hover:text-gray-500" aria-hidden="true" />
           </div>
           <div className="flex items-center padding-10">
            <DocumentTextIcon className="h-7 w-7 text-green-400 z-20 hover:text-gray-500" aria-hidden="true" />
           </div>
           <div className="flex items-center padding-10">
            <DocumentIcon className="h-7 w-7 text-gray-400 z-20 hover:text-gray-500" aria-hidden="true" />
           </div>
           <div className="flex items-center padding-10">
            <CogIcon className="h-7 w-7 text-gray-400 z-20 hover:text-gray-500" aria-hidden="true" />
           </div>
        </div>
    )
}