import React from 'react'
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs'


const data = [
    { id : 1, name: "Home", url: "/"},
    { id : 1, name: "About", url: "/about"},
    { id : 1, name: "Categories", subMenu: true},
    { id : 1, name: "Contact", url: "/contact"}
]

const subMenudata = [
    { id : 1, name: "Item 1", doc_count: 11},
    { id : 1, name: "Item 2", doc_count: 8},
    { id : 1, name: "Item 3", doc_count: 64},
    { id : 1, name: "Item 4", doc_count: 107}
]

const MenuMobile = ({showCatMenu ,setShowCatMenu, setMobileMenu}) => {
  return (
    <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full
    h-[calc(100vh - 50px)] bg-white border-t text-black'>
        {data.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    { !!item?.subMenu ? (
                        <li
                            className='cursor-pointer py-4 px-5 border-b flex flex-col relative'
                            onClick={() => setShowCatMenu(!showCatMenu)}>
                                {/* works in a toggle way */}
                            <div className='flex justify-between items-center'>
                                {item.name}
                                <BsChevronDown size={14}/>
                            </div>

                            {showCatMenu && (
                                <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4'>
                                    {subMenudata.map((submenu) => {
                                        return (
                                            <Link
                                                key={submenu.id}
                                                href="/" onClick={() => {
                                                    setShowCatMenu(false); 
                                                    setMobileMenu(false); 
                                                    }}
                                            >
                                                <li
                                                    className='py-4 px-8 border-t flex justify-between'>
                                                    {submenu.name}
                                                    <span
                                                        className='opacity-50 text-sm'>
                                                        1313
                                                    </span>
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li 
                            className='py-4 px-5 border-b'>
                            <Link 
                                href={item?.url}
                                onClick={() => setMobileMenu(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    )}
                    {/* There is one question mark after item as well this is because
                    the submenu option is not available with home about etc so to
                    stop the app from crashing same reason for using !! it makes the value true */}
                </React.Fragment>
            )
        })}
    </ul>
  )
}

export default MenuMobile