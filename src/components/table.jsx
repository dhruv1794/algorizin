import { ArrowDownIcon, SwitchVerticalIcon, ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon } from '@heroicons/react/outline';
import SearchBar from './searchBar';
const tableInfo = [
    {
        id:1,
        date:"11 Nov 2021",
        title:"Hammer",
        detail:"This is a Hammer to do work with",
        status:"Alright",
        quantity:"200",
        unitPrice:"$10",
        amount:"$2000.00",
        dotClass:"green-dot"
    },
    {
        id:2,
        date:"10 Nov 2021",
        title:"Hammer",
        detail:"This is a Screw to do work with",
        status:"Alright",
        quantity:"122",
        unitPrice:"$10",
        amount:"$1220.00",
        dotClass:"green-dot"
    },
    {
        id:3,
        date:"6 Nov 2021",
        title:"Hammer",
        detail:"Wood plan will be used to do woodworks, duh",
        status:"In progress",
        quantity:"100",
        unitPrice:"$1.5",
        amount:"$150.00",
        dotClass:"orange-dot"
    },
    {
        id:4,
        date:"28 Oct 2021",
        title:"Hammer",
        detail:"-",
        status:"Out of Stock",
        quantity:"0",
        unitPrice:"$10",
        amount:"$0.00",
        dotClass:"red-dot"
    },
    {
        id:5,
        date:"22 Oct 2021",
        title:"Hammer",
        detail:"-",
        status:"Out of Stock",
        quantity:"0",
        unitPrice:"$10",
        amount:"$0.00",
        dotClass:"red-dot"
    },
    {
        id:6,
        date:"16 Oct 2021",
        title:"Hammer",
        detail:"-",
        status:"Out of Stock",
        quantity:"0",
        unitPrice:"$10",
        amount:"$0.00",
        dotClass:"red-dot"
    },
    {
        id:7,
        date:"9 Oct 2021",
        title:"Hammer",
        detail:"This is a Hammer to do work with",
        status:"Alright",
        quantity:"200",
        unitPrice:"$10",
        amount:"$2000.00",
        dotClass:"green-dot"
    },
    {
        id:8,
        date:"5 Oct 2021",
        title:"Hammer",
        detail:"This is a Hammer to do work with",
        status:"Alright",
        quantity:"200",
        unitPrice:"$10",
        amount:"$2000.00",
        dotClass:"green-dot"
    },
    {
        id:9,
        date:"1 Oct 2021",
        title:"Hammer",
        detail:"This is a Hammer to do work with",
        status:"Alright",
        quantity:"200",
        unitPrice:"$10",
        amount:"$2000.00",
        dotClass:"green-dot"
    },
    {
        id:10,
        date:"23 Sep 2021",
        title:"Hammer",
        detail:"This is a Hammer to do work with",
        status:"Alright",
        quantity:"200",
        unitPrice:"$10",
        amount:"$2000.00",
        dotClass:"green-dot"
    },
]
export default function Table() {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="p-4 bg-white flex">
        <SearchBar/>

    </div>
    <table className="w-full text-sm text-left bg-white ">
        <thead className="hidden text-xs font-light bg-orange-100 md:table-header-group">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label  className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="text-sm font-medium px-2 py-1  ">
                   Date Updated &nbsp;
                   <ArrowDownIcon className="h-3 w-3 inline  z-20 hover:text-gray-500" aria-hidden="true" />
                </th>
                <th scope="col" className="text-sm font-medium px-2 py-1  lg:px-6 py-3">
                    Title
                    &nbsp;
                   <SwitchVerticalIcon className="h-3 w-3 inline  z-20 hover:text-gray-500" aria-hidden="true" />
                </th>
                <th scope="col" className=" text-sm font-medium px-2 py-1 ">
                    Details
                </th>
                <th scope="col" className="text-sm font-medium px-2 py-1 lg:px-6 py-3">
                    Status
                </th>
                <th scope="col" className="text-sm font-medium  px-2 py-1 ">
                    Quantity
                </th>
               
                <th scope="col" className="text-sm font-medium px-2 py-1  ">
                    Unit Price
                </th>
                <th scope="col" className="text-sm font-medium px-2 py-1 ">
                    Amount
                    &nbsp;
                   <SwitchVerticalIcon className="h-3 w-3 inline  z-20 hover:text-gray-500" aria-hidden="true" />
                </th>
              
            </tr>
        </thead>
        <thead className='hidden text-xs font-light bg-orange-100 display-only-tab sm:table-header-group md:hidden'>
        <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label  className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-2 py-1 md:px-6 py-3">
                   Date Updated &nbsp;
                   <ArrowDownIcon className="h-3 w-3 inline  z-20 hover:text-gray-500" aria-hidden="true" />
                </th>
                <th scope="col" className="px-2 py-1  lg:px-6 py-3">
                    Title
                    &nbsp;
                   <SwitchVerticalIcon className="h-3 w-3 inline  z-20 hover:text-gray-500" aria-hidden="true" />
                </th>
               
                <th scope="col" className="px-2 py-1 lg:px-6 py-3">
                    Status
                </th>
                <th scope="col" className=" px-2 py-1 md:px-6 py-3">
                <div className="w-16"></div>
                </th>
               
                <th scope="col" className="px-2 py-1 md:px-6 py-3">
                    Amount
                    &nbsp;
                   <SwitchVerticalIcon className="h-3 w-3 inline  z-20 hover:text-gray-500" aria-hidden="true" />
                </th>
              
            </tr>
        </thead>
        <thead className='text-xs font-light bg-orange-100  sm:hidden'>
        <tr>
              
                <th scope="col" className="px-2 py-1  lg:px-6 py-3">
                    Title
                    &nbsp;
                   <SwitchVerticalIcon className="h-3 w-3 inline  z-20 hover:text-gray-500" aria-hidden="true" />
                </th>
               
                <th scope="col" className="px-2 py-1 lg:px-6 py-3">
                <div className="w-16"></div>
                </th>
                <th scope="col" className=" px-2 py-1 md:px-6 py-3">
                    <div className="w-16"></div>
                </th>
               
                <th scope="col" className="px-2 py-1 md:px-6 py-3">
                    Amount
                    &nbsp;
                   <SwitchVerticalIcon className="h-3 w-3 inline  z-20 hover:text-gray-500" aria-hidden="true" />
                </th>
              
            </tr>
        </thead>
        <tbody>
            {tableInfo.map((info)=> <tr key={info.id} className="bg-white border-b bg-white  hover:bg-white ">
                <td className="w-4 p-4 hidden sm:table-cell">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label  className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="hidden font-medium whitespace-nowrap px-2 py-2 sm:table-cell lg:px-6 py-4">
                    {info.date}
                </th>
                <td className="px-2 py-2 lg:px-6 py-4">
                    {info.title}
                </td>
                <td className="hidden px-6 py-4 md:block">
                    {info.detail}
                </td>
                <td className="px-2 py-2 lg:px-6 py-4 whitespace-nowrap">
                   <p> <span className='hidden mr-2 sm:inline-block'>{info.status} </span><span className={info.dotClass}></span></p>
                </td>
                <td className="md: table-cell px-2 py-2 lg:px-6 py-4">
                 <b>{info.quantity}</b>/300
                </td>
                <td className="hidden px-6 py-4 md:table-cell">
                  {info.unitPrice}
                </td>
                <td className="px-2 py-2 lg:px-6 py-4">
                {info.amount}
                </td>
            </tr>)}
           
        </tbody>
  
    </table>
    <div className='w-100 p-4 bg-white'>
           <div className='flex w-100   justify-end items-center sm:justify-between'>
               
               <div className="hidden sm:inline">
                    {/* left */}
                    {/* <select className="form-select appearance-none
                        block
                        w-full
                        px-3
                        py-1.5
                        m-4
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                        <option defaultValue>10 items per page</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select> */}
                    {/* <ChevronDownIcon className="h-5 w-5 text-gray-400 z-20 hover:text-gray-500" aria-hidden="true" /> */}
                    <div className="relative">
                    
                    <input type="text" className="bg-white-2 h-12 w-64 pr-8 pl-5 rounded z-0 border border-solid border-gray-300 focus:shadow focus:outline-none" read-only value={"10 items per page"}></input>
            
                    <div className="absolute top-3 right-3">
                   
                    <ChevronDownIcon className="h-5 w-5 text-gray-400 z-20 hover:text-gray-500" aria-hidden="true" />
                    </div>
            
                    </div>
               </div>
              
            <div>
               <div className='flex align-center '>
                   {/* {three components} */}
                   <div className="relative">
                    
                    <input type="text" className="bg-white-2 h-12 w-48 pr-8 pl-5 rounded z-0 border border-solid border-gray-300 focus:shadow focus:outline-none" read-only value={"Page 1 of 5"}></input>
            
                    <div className="absolute top-3 right-3">
                   
                    <ChevronDownIcon className="h-5 w-5 text-gray-400 z-20 hover:text-gray-500" aria-hidden="true" />
                    </div>
            
                    </div>
                    <div className='flex'>
                    <button className='tablebutton h-12 w-12   border border-solid border-gray-300'>
                        <ChevronLeftIcon className="h-3 w-3 inline  z-20 hover:text-gray-500" aria-hidden="true"></ChevronLeftIcon>
                    </button>
                    <button className='tablebutton  h-12 w-12  border border-solid border-gray-300'>
                    <ChevronRightIcon className="h-3 w-3 inline  z-20 hover:text-gray-500" aria-hidden="true"></ChevronRightIcon>
                    </button>
               </div>
               </div>
               </div>
           </div>
        </div>
</div>
    )
}