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
    { id : 2, name: "Item 2", doc_count: 8},
    { id : 3, name: "Item 3", doc_count: 64},
    { id : 4, name: "Item 4", doc_count: 107}
]

const Menu = ({showCatMenu ,setShowCatMenu}) => {
  return (
    <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
        {data.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    { !!item?.subMenu ? (
                        <li
                            className='cursor-pointer flex items-center gap-2 relative'
                            onMouseEnter={() => setShowCatMenu(true)}
                            onMouseLeave={() => setShowCatMenu(false)}>
                            {item.name}
                            <BsChevronDown size={14}/>

                            {showCatMenu && (
                                <ul className='bg-white absolute top-6 left-0 min-w-[250px] p-1 text-black shadow-lg rounded-sm'>
                                    {subMenudata.map((submenu) => {
                                        return (
                                            <Link
                                                key={submenu.id}
                                                href="/" onClick={() => setShowCatMenu(false)}>
                                                <li
                                                    className='h-12 flex justify-between items-center hover:bg-black/[0.03] rounded-md'>
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
                            className='cursor-pointer'>
                            <Link 
                                href={item?.url}>
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

export default Menu