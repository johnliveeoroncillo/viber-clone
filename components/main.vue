<template>
    <div>
        <div class="w-[20%] flex flex-col border-r-2 border-gray-700 py-2 gap-4 pr-1">
            <div class="flex flex-row gap-3 px-2">
                <div class="rounded-full p-1 text-white flex flex-row gap-1 items-center cursor-pointer" :class="theme_button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
                        <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="rounded-full flex-1 outline-none text-gray-400 px-4 text-sm leading-8" :class="theme_button">Search</div>

                <button class="rounded-full w-8 h-full grid place-items-center text-indigo-500" :class="theme_button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                </button>
            </div>

            <div class="flex flex-row items-center justify-between px-2">
                <h1 class="text-white font-medium text-sm flex flex-row items-center gap-2">
                    Chats
                    
                    <span class="rounded-full bg-indigo-500 grid place-items-center text-xs w-5 h-5 text-white">1</span>
                </h1>

                <button class="rounded-full text-gray-400" :class="theme_button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </button>
            </div>

            <div class="flex flex-row flex-wrap gap-2 px-2">
                <div class="rounded-xl bg-indigo-400 w-10 h-10 grid place-items-center text-white hover:bg-indigo-300 relative" v-for="d in 5" :key="d">
                    <button class="rounded-full bg-white text-black h-4 w-4 grid place-items-center ring ring-gray-800 -top-2 -right-2 absolute z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </div>
                <div class="rounded-xl w-10 h-10 text-indigo-500 grid place-items-center cursor-pointer" :class="theme_button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </div>

            <div class="w-full flex-1 relative">
                <div class="absolute w-full h-full overflow-auto flex flex-col gap-2 pl-2 pr-1">
                    <div class="flex flex-row gap-3 w-full p-2 rounded-2xl" :class="theme_button" v-for="d in 50" :key="d">
                        <div class="w-16 h-16 p-1">
                            <img src="@/assets/default.jpg" class="rounded-2xl" />
                        </div>
                        <div class="flex-1 overflow-hidden text-white">
                            <div class="flex flex-row">
                                <span class="font-medium truncate">Name Laboris ea esse dolor exercitation.  Incididunt commodo excepteur nulla laboris fugiat adipisicing velit exercitation do exercitation incididunt excepteur adipisicing.</span>

                                <small class="text-gray-400 text-xs gap-1 flex flex-row items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                                    </svg>

                                    Yesterday
                                </small>
                            </div>
                            <span class="!line-clamp-2 text-gray-400 text-sm"> Labore ex nulla mollit irure nostrud non. Tempor laborum exercitation ut cupidatat amet ea qui culpa deserunt. Aute incididunt nisi ut cupidatat id. Cillum id elit sit duis consequat deserunt enim duis.</span>
                        </div>
                    </div>
                </div>

                <button class="rounded-full w-10 h-10 grid place-items-center text-white absolute bottom-4 right-2 shadow border border-gray-500" :class="theme_button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="w-[70%] flex-1 flex flex-col">
            <div class="flex flex-row border-b justify-between border-gray-700 py-2 px-3">
                <div class="inline-flex flex-row items-center text-gray-400 divide-x divide-opacity-50 divide-gray-400 font-bold">
                    <button class="pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    
                    <button class="pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>  

                <div class="inline-flex flex-row gap-4 text-gray-400">
                    <button class="p-2 rounded-full" :class="theme_button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            

            <div class="flex flex-row justify-between items-center px-4 py-3 border-b border-gray-700">
                <div class="flex flex-row gap-4 items-center">
                    <img src="@/assets/default.jpg" class="rounded-2xl w-12 h-12" />
                    <div class="flex flex-col">
                        <h1 class="text-white">Tst name</h1>
                        <span class="text-gray-400 text-sm">Active</span>
                    </div>
                </div>

                <div class="flex flex-row gap-4">
                    <button class="text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                    </button>
                    <button class="text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </button>
                    <button class="text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </button>
                    <button class="text-indigo-500" @click="show_info = !show_info">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            <main class="relative flex-1 w-full">
                <div class="absolute left-1/2 -translate-x-1/2 h-full overflow-auto flex flex-col gap-2 p-8 w-[95%] lg:w-[80%] 2xl:w-[50%]">
                    <div class="flex flex-row">
                        <div class="flex-1 gap-2 flex flex-row">
                            <img src="@/assets/default.jpg" class="rounded-xl w-10 h-10" />
                            <div class="flex-1 text-white text-sm flex flex-col">
                                <div class="w-[fit-content] mr-auto bg-gray-600 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl py-2 px-4 tracking-wide">
                                    <p>Enim esse aliqua in nulla pariatur exercitation laborum sit occaecat eiusmod consequat. Minim adipisicing excepteur incididunt minim ut consequat ut sit. Exercitation ullamco id reprehenderit nostrud amet sunt nulla duis. Sit incididunt qui pariatur ipsum consectetur nostrud non sunt voluptate cillum reprehenderit. Non irure dolor aute dolor qui non laborum mollit.</p>

                                    <div class="text-gray-400 group cursor-pointer">
                                        <small class="text-right block font-light group-hover:hidden">11:51AM</small>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="ml-auto w-5 h-5 hidden group-hover:block">
                                            <path fill-rule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1"></div>
                    </div>

                    <div class="flex flex-row-reverse">
                        <div class="flex-1 gap-2 flex flex-row-reverse">
                            <img src="@/assets/default.jpg" class="rounded-xl w-10 h-10" />
                            <div class="flex-1 text-white text-sm flex flex-col">
                                <div class="w-[fit-content] bg-gray-600 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl py-2 px-4 tracking-wide ml-auto">
                                    <p>Test </p>

                                    <div class="text-gray-400 group cursor-pointer">
                                        <small class="text-right block font-light group-hover:hidden">11:51AM</small>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="ml-auto w-5 h-5 hidden group-hover:block">
                                            <path fill-rule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1"></div>
                    </div>

                    <!-- <div class="flex flex-row-reverse gap-2 flex-1">
                        <img src="@/assets/default.jpg" class="rounded-xl w-10 h-10" />
                        <div class="flex-1 text-white text-sm flex flex-col">
                            <div class="bg-gray-600 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl py-2 px-4 tracking-wide">
                                <p>Enim esse aliqua in nulla pariatur exercitation laborum sit occaecat eiusmod consequat. Minim adipisicing excepteur incididunt minim ut consequat ut sit. Exercitation ullamco id reprehenderit nostrud amet sunt nulla duis. Sit incididunt qui pariatur ipsum consectetur nostrud non sunt voluptate cillum reprehenderit. Non irure dolor aute dolor qui non laborum mollit.</p>

                                <div class="text-gray-400 group cursor-pointer">
                                    <small class="text-right block font-light group-hover:hidden">11:51AM</small>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="ml-auto w-5 h-5 hidden group-hover:block">
                                        <path fill-rule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div> -->


                </div>
            </main>

            <div class="border-t border-gray-700 flex flex-row">
                <div class="flex flex-row text-gray-400 py-3 px-4 gap-3">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                        </svg>
                    </button>
                     <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm9 4.5a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0v-7.5zm1.5 0a.75.75 0 01.75-.75h3a.75.75 0 010 1.5H16.5v2.25H18a.75.75 0 010 1.5h-1.5v3a.75.75 0 01-1.5 0v-7.5zM6.636 9.78c.404-.575.867-.78 1.25-.78s.846.205 1.25.78a.75.75 0 001.228-.863C9.738 8.027 8.853 7.5 7.886 7.5c-.966 0-1.852.527-2.478 1.417-.62.882-.908 2-.908 3.083 0 1.083.288 2.201.909 3.083.625.89 1.51 1.417 2.477 1.417.967 0 1.852-.527 2.478-1.417a.75.75 0 00.136-.431V12a.75.75 0 00-.75-.75h-1.5a.75.75 0 000 1.5H9v1.648c-.37.44-.774.602-1.114.602-.383 0-.846-.205-1.25-.78C6.226 13.638 6 12.837 6 12c0-.837.226-1.638.636-2.22z" clip-rule="evenodd" />
                        </svg>
                    </button>
                     <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                            <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                        </svg>
                    </button>
                </div>

                <input type="text" placeholder="Type a message ..." class="text-gray-400 flex-1 text-sm outline-none bg-transparent" />
            </div>
        </div>
        <transition name="slide-fade">
            <div class="w-[18%] flex flex-col border-l-2 border-gray-700 bg-gray-700 gap-2" v-if="show_info">
                <div class="relative w-full h-[250px] bg-gray-700">
                    <button class="absolute top-2 right-2 text-white cursor-pointer z-10" @click="show_info = false;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                        </svg>
                    </button>

                    <div class="absolute w-full h-full bg-gradient-to-t via-gray-700 from-black"></div>

                    <div class="absolute bottom-0 w-full px-4 py-3">
                        <div class="flex flex-row justify-between items-center">
                            <h1 class="text-white text-sm">Name</h1>

                            <div class="flex flex-row gap-3 text-white items-center">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                        <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                                    </svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <ul class="flex flex-col bg-gray-800">
                    <li class="flex flex-row justify-between place-items-center py-3 px-4 border-b border-gray-700">
                        <span class="text-gray-500 text-sm">Media</span>
                        <span class="text-indigo-500 text-sm">Show All</span>
                    </li>
                    <li class="flex flex-row justify-between place-items-center py-3 px-4 border-b border-gray-700">
                        <span class="text-gray-500 text-sm">GIFs</span>
                        <span class="text-white text-sm">0</span>
                    </li>
                    <li class="flex flex-row justify-between place-items-center py-3 px-4 border-b border-gray-700">
                        <span class="text-gray-500 text-sm">Links</span>
                        <span class="text-white text-sm">0</span>
                    </li>
                    <li class="flex flex-row justify-between place-items-center py-3 px-4 border-b border-gray-700">
                        <span class="text-gray-500 text-sm">Files</span>
                        <span class="text-white text-sm">0</span>
                    </li>
                </ul>

                <ul class="flex flex-col bg-gray-800">
                    <li class="flex flex-row justify-between place-items-center py-3 px-4 border-b border-gray-700">
                        <span class="text-gray-500 text-sm">Participants</span>
                        <span class="text-indigo-500 text-sm">Add</span>
                    </li>
                    <li class="flex flex-row justify-between place-items-center py-3 px-4 border-b border-gray-700">
                        <span class="text-gray-500 text-sm">Add to Groups</span>
                        <span class="text-white text-sm">0</span>
                    </li>
                    <li class="flex flex-row justify-between place-items-center py-3 px-4 border-b border-gray-700">
                        <span class="text-gray-500 text-sm">Groups in Common</span>
                        <span class="text-white text-sm">0</span>
                    </li>
                    <li class="flex flex-row justify-between place-items-center py-3 px-4 border-b border-gray-700">
                        <span class="text-gray-500 text-sm">Encrypted</span>
                        <span class="text-white text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                        </span>
                    </li>
                    <li class="flex flex-row justify-between place-items-center py-3 px-4 border-b border-gray-700">
                        <span class="text-gray-500 text-sm pr-2">
                            Mute Chat
                            <p class="block text-white">You will not receive any notification for messages or likes</p>
                        </span>
                        <span class="text-white relative flex-1 text-right">
                        <label for="default-toggle" class="inline-flex relative items-center cursor-pointer m-0">
                                <input type="checkbox" value="" id="default-toggle" class="sr-only peer outline-none">
                                <div class="relative w-7 h-3 bg-gray-800 border border-gray-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 outline-none"></div>
                            </label>
                        </span>
                    </li>
                    <li class="flex flex-row justify-between place-items-center py-3 px-4 border-b border-gray-700">
                        <span class="text-gray-500 text-sm">Set Background</span>
                        <span class="bg-gray-800 border border-gray-500 w-8 h-8">
                        
                        </span>
                    </li>
                </ul>

                <ul class="flex flex-col bg-gray-800 flex-1">
                    <li class="flex flex-row justify-between place-items-center py-3 px-4 border-b border-gray-700">
                        <span class="text-red-500 text-sm">Delete Conversation</span>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show_info: false,
        }
    }    
}
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(55,65,81);
  border-radius: 6rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>