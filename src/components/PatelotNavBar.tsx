import { modal, navBar, navBarTop, image } from "../modals/locates";

function PatelotNavBar({ children, ...rest }: any) {
    // state

    // comportements

    // render
    return (
        <nav {...rest} className="z-50 1 relative">
            <div className="bg-[#8c949e] border-b-[#465a75] border-b-2 lg:h-[68px] hidden md:block">
                <div className="container mx-auto flex md:justify-end lg:justify-between">
                    <div className="hidden lg:flex">
                        <a href="http://patelot.de" className="">
                            <img alt="kamdem_logo" src={require("../img/logo_pk.png")} width={80} height={60} />
                        </a>
                        <div className="mt-[33px] font-sans-semi-bold text-sm">
                            <a href="http://patelot.de" className="outline-none whitespace-nowrap bg-[#FFF] text-black rounded-t mt-20 px-16 py-4 border-transparent focus-visible:outline-none focus-visible:border-white">
                                KAMDEM GmbH
                            </a>
                            <a href="https://www.osteo-vital.de/" className="outline-none whitespace-nowrap rounded-t mt-20 px-16 py-4 bg-[#B3CBB7] text-white hover:text-[#FFF] hover:bg-[#AAADAB] visible border-dotted border-1 border-transparent focus-visible:outline-none focus-visible:border-[#FFF]">
                                OSTEO VITAL
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-24 text-white font-sans-regular text-sm lg:mt-[30px]">
                        <div>
                            {navBarTop.phone}
                        </div>
                        <div>
                            {navBarTop.name}
                        </div>
                        <div>
                            {navBarTop.login}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <nav className="relative bg-white">
                    <div className="container mx-auto bg-ionos-blue-800 h-[58px] flex lg:justify-between md:justify-start justify-between text-black lg:bg-white">
                        <div className="hidden lg:flex h-full flex-grow">
                            <button className="first:pl-0 px-12 hover:text-[#1474c4] text-[#001B41] border-transparent border-1 border-dotted focus:outline-none relative font-sans-semi-bold text-md outline-none focus-visible:border-black">
                                <span className="h-full mt-1 border-b-4 items-center border-transparent inline-flex">
                                    Home
                                </span>
                            </button>
                            <button className="first:pl-0 px-12 hover:text-[#1474c4] text-[#001B41] border-transparent border-1 border-dotted focus:outline-none relative font-sans-semi-bold text-md outline-none focus-visible:border-black">
                                <span className="h-full mt-1 border-b-4 items-center border-transparent inline-flex">
                                    Lebenslauf
                                </span>
                            </button>
                            <button className="first:pl-0 px-12 hover:text-[#1474c4] text-[#001B41] border-transparent border-1 border-dotted focus:outline-none relative font-sans-semi-bold text-md outline-none focus-visible:border-black">
                                <span className="h-full mt-1 border-b-4 items-center border-transparent inline-flex">
                                    XING
                                </span>
                            </button>
                            <button className="first:pl-0 px-12 hover:text-[#1474c4] text-[#001B41] border-transparent border-1 border-dotted focus:outline-none relative font-sans-semi-bold text-md outline-none focus-visible:border-black">
                                <span className="h-full mt-1 border-b-4 items-center border-transparent inline-flex">
                                    Hobbies
                                </span>
                            </button>
                            <button className="first:pl-0 px-12 hover:text-[#1474c4] text-[#001B41] border-transparent border-1 border-dotted focus:outline-none relative font-sans-semi-bold text-md outline-none focus-visible:border-black">
                                <span className="h-full mt-1 border-b-4 items-center border-transparent inline-flex">
                                    Kontakt
                                </span>
                            </button>
                            <button className="first:pl-0 px-12 hover:text-[#1474c4] text-[#001B41] border-transparent border-1 border-dotted focus:outline-none relative font-sans-semi-bold text-md outline-none focus-visible:border-black ml-auto pr-0">
                                <span className="h-full mt-1 border-b-4 items-center border-transparent inline-flex">
                                    Mehr
                                </span>
                            </button>
                        </div>

                        <div className="lg:hidden grow shrink-0 inline-flex items-center">
                            <div className="cursor-pointer">
                                <div className="relative flex h-16 w-24">
                                    <div id="burger-button" className="">
                                        <img alt="kamdem_logo" src={require("../img/logo_pk.png")} width={102} height={65} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grow shrink-0 inline-flex items-center lg:hidden">
                            <a href="http://patelot.de" className="">
                                <img alt="kamdem_logo" src={require("../img/logo_pk.png")} width={102} height={65} />
                            </a>
                        </div>
                        <div className="md:hidden relative h-full inline-flex items-center float-right">
                            <a href="tel:+491714170604" className="outline-none whitespace-nowrap !text-white mr-20 border-dotted border-1 border-transparent focus-visible:outline-none focus-visible:border-white">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                                </svg>
                                <button>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            {children}
        </nav>
    )
}

export default PatelotNavBar