import React, { useState } from 'react'
import { HiLanguage } from "react-icons/hi2";
import { Menu } from '@headlessui/react'
import {useRecoilState} from 'recoil';
import { InstructionLang } from '../utils/SharedState'

const SearchBar = () => {
    const [Lang, setLang] = useRecoilState(InstructionLang);


  return (
    <div className="relative">
        <Menu>
            <Menu.Button>
                <div className="p-2 hover:bg-slate-200 transition-all ease-in duration-150 cursor-pointer rounded-full">
                    <div className="flex items-center space-x-2">
                        <HiLanguage className="h-5 w-5"/> {Lang}
                    </div>
                </div>
            </Menu.Button>
            <Menu.Items>
                <div className="absolute top-auto right-0 p-2 bg-slate-50 rounded-md">
                <Menu.Item>
                    <div onClick={() => setLang('EN')} className="drop-menu w-full flex items-center">
                        <HiLanguage className="h-5 w-5"/> EN
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={() => setLang('ES')} className="drop-menu w-full flex items-center">
                        <HiLanguage className="h-5 w-5"/> ES
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={() => setLang('DE')} className="drop-menu w-full flex items-center">
                        <HiLanguage className="h-5 w-5"/> DE
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={() => setLang('FR')} className="drop-menu w-full flex items-center">
                        <HiLanguage className="h-5 w-5"/> FR
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <div onClick={() => setLang('IT')} className="drop-menu w-full flex items-center">
                        <HiLanguage className="h-5 w-5"/> IT
                    </div>
                </Menu.Item>
                </div>
            </Menu.Items>
        </Menu>
        

        

        
    </div>
  )
}



export default SearchBar