'use client'

import {useState} from 'react';
import Link from "next/link";
import {FaBars} from "react-icons/fa6";
import {FaX} from "react-icons/fa6";
import ThemePicker from "@/components/theme/theme-picker";
import LanguagePicker from "@/components/i18n/language-picker";
import {useTranslations} from "next-intl";

export default function Navigation() {
    const [open, setOpen] = useState(false);
    const t = useTranslations('Navigation');

    return (
        <header id={'header'} className="fixed top-0 left-0 w-full h-16 text-muted-foreground bg-muted backdrop-blur-lg shadow z-50">
            <nav id={'navigation'} data-state={open && 'active'}
                 className="max-w-6xl mx-auto h-full flex items-center justify-between px-6">
                <div className="font-bold text-lg">
                    <Link
                        href="/"
                        aria-label="home"
                        className="flex items-center space-x-2"
                    >
                        <p className="text-2xl">Logo+Name</p>
                    </Link>
                </div>
                <ul className="hidden md:flex gap-6 text-sm font-medium">
                    <li><a href="#" className="hover:text-blue-600">{t("home")}</a></li>
                    <li><a href="#" className="hover:text-blue-600">{t("aboutMe")}</a></li>
                    <li><a href="#" className="hover:text-blue-600">{t("contact")}</a></li>
                </ul>
                <div className="flex items-center gap-1 md:gap-2">
                <LanguagePicker />
                <ThemePicker/>
                <button
                    className="relative md:hidden w-8 h-8"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle Menu"
                    data-state={open ? 'active' : 'inactive'}
                >
                    <FaBars
                        className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-8 duration-200"
                    />
                    <FaX
                        className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-8 -rotate-180 scale-0 opacity-0 duration-200"
                    />
                </button>
                </div>
            </nav>
            {open && (
                <div className="md:hidden text-muted-foreground bg-muted backdrop-blur-xl shadow-inner border-t border-gray-200">
                    <ul className="flex flex-col items-center py-4 space-y-4">
                        <li><a href="#" className="hover:text-blue-600">Home</a></li>
                        <li><a href="#" className="hover:text-blue-600">Über mich</a></li>
                        <li><a href="#" className="hover:text-blue-600">Kontakt</a></li>
                    </ul>
                </div>
            )}
        </header>
    )
}