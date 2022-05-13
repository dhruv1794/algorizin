import { SearchIcon} from '@heroicons/react/outline';

export default function SearchBar(){
    return(
        <div className="relative">
                    
        <input type="text" className="bg-neutral-2 h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Search"></input>

        <div className="absolute top-3 left-2">
       
        <SearchIcon className="h-5 w-5 text-gray-400 z-20 hover:text-gray-500" aria-hidden="true" />
        </div>

        </div>
    )
}