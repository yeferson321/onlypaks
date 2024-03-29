'use client'
import { useState } from "react";
import { useTranslations } from 'next-intl';
import { IconOnly, IconQuestion, IconMoon, IconSun, IconUser, IconLock, IconLanguage, IconMark, IconEllipsis } from '@/app/lib/icons/SocialIcons';
import SwitchTheme from '../switchTheme/SwitchTheme';
import SwitchLanguage from '../switchLanguage/SwitchLanguage';
import ModalSidebar from '../modals/ModalHeader';
import Link from 'next/link';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('Header');

    return (
        <>

            <header className="xs:sticky xl:w-56 xs:top-0 h-screen" aria-label="header">

                <div className="h-full px-4 xl:px-0 py-4 overflow-y-auto shadow-xl xs:shadow-none bg-white dark:bg-elevated-base xs:dark:bg-transparent">

                    <div className="xs:hidden xl:block flex items-center justify-between mx-2">
                        <div className="flex items-center mr-1 xl:mr-0">
                            <span className="sr-only">Onlypaks logo</span>
                            <IconOnly className="flex-shrink-0 fill-neutral-500 dark:fill-white" />
                        </div>
                        <button type="button" onClick={() => setIsOpen(false)} className="xl:hidden p-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                            <span className="sr-only">Close panel</span>
                            <IconMark strokeWidth={2} className="flex-shrink-0 w-7 h-7 stroke-neutral-500 dark:stroke-white group-hover:stroke-blue-500" />
                        </button>
                    </div>

                    <ul className="mt-3 xs:mt-0 xl:mt-4 space-y-3 text-base font-medium">

                        <li>
                            <Link href="/" className="flex items-center p-1.5 rounded-full text-neutral-500 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                                <IconUser className="flex-shrink-0 w-7 xs:w-8 h-7 xs:h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-blue-500" />
                                <span className="ms-3 text-nowrap xs:hidden xl:block">{t('login')}</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="flex items-center p-1.5 rounded-full text-neutral-500 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                                <IconQuestion className="flex-shrink-0 w-7 xs:w-8 h-7 xs:h-8 stroke-neutral-500 dark:stroke-white group-hover:stroke-blue-500" />
                                <span className="ms-3 text-nowrap xs:hidden xl:block">{t('support')}</span>
                            </Link>
                        </li>

                        <li>
                            <SwitchTheme
                                buttonClass="flex items-center w-full p-1.5 rounded-full text-neutral-500 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/5 group"
                                IconMoon={<IconMoon className="flex-shrink-0 w-7 xs:w-8 h-7 xs:h-8 stroke-neutral-500 dark:stroke-white group-hover:stroke-blue-500" />}
                                IconSun={<IconSun className="flex-shrink-0 w-7 xs:w-8 h-7 xs:h-8 stroke-neutral-500 dark:stroke-white group-hover:stroke-blue-500" />}
                                spanClass="ms-3 text-nowrap xs:hidden xl:block">
                            </SwitchTheme>
                        </li>

                        <li>
                            <SwitchLanguage
                                buttonClass="flex items-center w-full p-1.5 rounded-full text-neutral-500 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/5 group"
                                IconLanguage={<IconLanguage className="flex-shrink-0 w-7 xs:w-8 h-7 xs:h-8 stroke-neutral-500 dark:stroke-white group-hover:stroke-blue-500" />}
                                spanClass="ms-3 text-nowrap xs:hidden xl:block">
                            </SwitchLanguage>
                        </li>

                    </ul>

                    <div className="xs:hidden xl:block p-3 xl:p-4 mt-8 rounded-lg bg-base/5 dark:bg-base" role="alert">

                        <div className="flex items-center justify-between mb-3">

                            <span className="text-green text-sm font-medium mr-1 py-0.5 px-1.5 rounded-full bg-green/10">{t('titleAlert')}</span>

                            <IconLock className="flex-shrink-0 w-5 h-5 stroke-neutral-500 dark:stroke-neutral-300" />

                        </div>

                        <p className="text-pretty text-[13px] text-neutral-500 dark:text-neutral-300">
                            {t('textAlert')}
                        </p>

                    </div>


                </div>

            </header>







            {/* <aside className="sticky xs:top-0 xs:overflow-y-auto xs:h-screen" aria-label="Header">

                <div className="flex xs:flex-col justify-between xs:justify-normal p-3 rounded-xl shadow-lg xs:shadow-none shadow-black/10 bg-white dark:bg-elevated-base xs:dark:bg-transparent">

                   
                    <ul className="flex flex-row xs:flex-col ml-2 xs:ml-0 gap-2 xs:gap-4 text-lg font-medium">

                        <li>
                            <button type="button" className="flex items-center p-1 rounded-full text-neutral-500 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                                <IconUser className="flex-shrink-0 w-8 h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-blue-500" />
                                <span className="hidden xl:flex ml-4 mr-2 whitespace-nowrap">{t('login')}</span>
                            </button>
                        </li>

                        <li className="xs:hidden">
                            <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex items-center p-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                                <span className="sr-only">Open main menu</span>
                                <IconEllipsis className="flex-shrink-0 w-8 h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-blue-500" />
                            </button>
                        </li>

                        <li className="hidden xs:block">
                            <button type="button" className="flex items-center p-1 rounded-full text-neutral-500 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                                <IconQuestion className="flex-shrink-0 w-8 h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-blue-500" />
                                <span className="hidden xl:flex ml-4 mr-2 whitespace-nowrap">{t('support')}</span>
                            </button>
                        </li>

                        <li className="hidden xs:block">
                            <SwitchTheme
                                buttonClass="flex items-center p-1 rounded-full text-neutral-500 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/5 group"
                                IconMoon={<IconMoon className="flex-shrink-0 w-8 h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-blue-500" />}
                                IconSun={<IconSun className="flex-shrink-0 w-8 h-8 stroke-neutral-500 dark:stroke-neutral-300 group-hover:stroke-blue-500" />}
                                spanClass="hidden xl:flex ml-4 mr-2 whitespace-nowrap">
                            </SwitchTheme>
                        </li>


                    </ul>


                    <div className="hidden xs:block mt-4 xl:mt-8 xl:space-y-6">

                        <div className="xl:w-56 hidden xl:block p-3 rounded-lg bg-base/5 dark:bg-base" role="alert">

                            <div className="flex items-center justify-between mb-3">
                                <span className="bg-green/10 text-green text-sm font-medium me-2 px-2.5 py-0.5 rounded-full">{t('titleAlert')}</span>
                                <IconLock className="flex-shrink-0 w-5 h-5 stroke-neutral-500 dark:stroke-neutral-300" />
                            </div>

                            <p className="text-pretty text-xs text-neutral-500 dark:text-neutral-300">
                                {t('textAlert')}
                            </p>

                        </div>

                        <SwitchLanguage
                            buttonClass="xl:w-56 flex items-center xl:justify-center w-full p-1 xl:p-2.5 rounded-full text-white xl:bg-blue-500 hover:bg-blue-50 xl:hover:bg-blue-600 dark:hover:bg-blue-500/5 xl:dark:hover:bg-blue-600 group"
                            IconLanguage={<IconLanguage className="flex-shrink-0 w-8 h-8 xl:w-5 xl:h-5 stroke-neutral-500 xl:stroke-white dark:stroke-neutral-300 xl:dark:stroke-white group-hover:stroke-blue-500 xl:group-hover:stroke-current" />}
                            spanClass="hidden xl:flex ml-3 mr-2 text-sm font-medium whitespace-nowrap">
                        </SwitchLanguage>

                    </div>


                </div>

            </aside >


            <ModalSidebar isOpen={isOpen} setIsOpen={setIsOpen}>
                
                <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-elevated-base shadow-xl">
                    <div className="flex-1 overflow-y-auto p-5">
                        <div className="flex items-center justify-between mx-1">
                            <div className="flex items-center mr-1">
                                <span className="sr-only">Onlypaks logo</span>
                                <IconOnly className="flex-shrink-0 fill-neutral-500 dark:fill-white" />
                            </div>
                            <button type="button" onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                                <span className="sr-only">Close panel</span>
                                <IconMark strokeWidth={2} className="flex-shrink-0 w-7 h-7 stroke-neutral-500 dark:stroke-white group-hover:stroke-blue-500" />
                            </button>
                        </div>
                        <div className="mt-1">
                            <div className="flow-root">
                                <div className="divide-y dark:divide-neutral-border">
                                    <ul className="space-y-3 text-sm font-medium py-3">
                                        <li>
                                            <Link href="/" className="flex items-center p-1 rounded-full text-neutral-500 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                                                <IconQuestion className="flex-shrink-0 w-7 h-7 stroke-neutral-500 dark:stroke-white group-hover:stroke-blue-500" />
                                                <span className="ms-3 me-2 whitespace-nowrap">{t('support')}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <SwitchTheme
                                                buttonClass="flex items-center w-full p-1 rounded-full text-neutral-500 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/5 group"
                                                IconMoon={<IconMoon className="flex-shrink-0 w-7 h-7 stroke-neutral-500 dark:stroke-white group-hover:stroke-blue-500" />}
                                                IconSun={<IconSun className="flex-shrink-0 w-7 h-7 stroke-neutral-500 dark:stroke-white group-hover:stroke-blue-500" />}
                                                spanClass="ms-3 me-2 whitespace-nowrap">
                                            </SwitchTheme>
                                        </li>
                                        <li>
                                            <SwitchLanguage
                                                buttonClass="flex items-center w-full p-1 rounded-full text-neutral-500 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/5 group"
                                                IconLanguage={<IconLanguage className="flex-shrink-0 w-7 h-7 stroke-neutral-500 dark:stroke-white group-hover:stroke-blue-500" />}
                                                spanClass="ms-3 me-2 whitespace-nowrap">
                                            </SwitchLanguage>
                                        </li>
                                    </ul>

                                    <div className="pt-3">
                                        <Link href="/" className="flex items-center p-1 rounded-full text-sm font-medium text-neutral-500 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/5 group">
                                            <IconUser className="flex-shrink-0 w-7 h-7 stroke-neutral-500 dark:stroke-white group-hover:stroke-blue-500" />
                                            <span className="ms-3 me-2 whitespace-nowrap">{t('login')}</span>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </ModalSidebar > */}
        </>
    )
};

