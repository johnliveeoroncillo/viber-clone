<template>
    <div class="main w-screen h-screen bg-gray-800 grid place-items-center relative after:opacity-5 after:bg-contain after:content-[''] after:w-full after:h-full after:absolute">
        <div class="text-center z-10">
            <img src="@/assets/logo.svg" class="w-56 mx-auto cursor-pointer" @click="screen = ''" />
            <h1 class="text-2xl text-gray-500 font-semibold tracking-wider mt-2">ChaTalk</h1>
            <p class="text-gray-400 text-sm">A Viber UI inspired messenger for everyone.</p>

            <button class="bg-transparent font-semibold bg-gray-700 border-2 text-gray-200 border-gray-700 rounded-xl px-4 py-2 flex-1" @click="$router.push('/app')">
                Demo App
            </button>

            <div class="flex flex-row mt-5 gap-4" v-if="screen === ''">
                <button class="bg-transparent font-semibold hover:bg-gray-700 border-2 text-gray-400 border-gray-700 rounded-xl px-4 py-2 flex-1" @click="screen = 'signin';">
                    Sign In
                </button>
                <button class="bg-transparent font-semibold bg-gray-700 border-2 text-gray-200 border-gray-700 rounded-xl px-4 py-2 flex-1" @click="screen = 'signup'">
                    Get Started
                </button>
            </div>
            <div class="rounded w-80 bg-gray-800 bg-opacity-70 border border-gray-700 p-4 text-left flex flex-col gap-3 mt-5" v-else-if="screen === 'signup'">
               <h1 class="text-xl font-semibold text-gray-400">Get Started</h1>

                <div>
                    <label class="block font-medium text-gray-400">Nickname</label>
                    <div class="flex flex-row items-center px-2 bg-gray-600 rounded-xl">
                        <span class="border-r pr-2 text-gray-300 border-gray-700">#</span>
                        <input type="text" class="flex-1 outline-none bg-gray-600 w-full font-medium text-gray-300 py-1 px-3 text-sm leading-8" />
                    </div>
                </div>
                <div>
                    <label class="block font-medium text-gray-400">Username</label>
                    <input type="text" class="rounded-xl flex-1 outline-none bg-gray-600 w-full font-medium text-gray-300 py-1 px-3 text-sm leading-8" />
                </div>
                <div>
                    <label class="block font-medium text-gray-400">Password</label>
                    <input type="password" class="rounded-xl flex-1 outline-none bg-gray-600 w-full font-medium text-gray-300 py-1 px-3 text-sm leading-8" />
                </div>

                <button class="bg-transparent font-semibold bg-gray-700 border-2 text-gray-300 border-gray-700 rounded-xl px-4 py-2 flex-1" @click="screen = 'signup'">
                    Sign Up
                </button>
                <button class="bg-transparent font-semibold hover:bg-gray-700 border-2 text-gray-400 border-gray-700 rounded-xl px-4 py-2 flex-1" @click="screen = 'signin';">
                    Sign In
                </button>
            </div>
            <div class="rounded w-80 bg-gray-800 bg-opacity-70 border border-gray-700 p-4 text-left flex flex-col gap-3 mt-5" v-else-if="screen === 'signin'">
                <h1 class="text-xl font-semibold text-gray-400">Sign In</h1>

                <div>
                    <label class="block font-medium text-gray-400">Username</label>
                    <input type="text" class="rounded-xl flex-1 outline-none bg-gray-600 w-full font-medium text-gray-300 py-1 px-3 text-sm leading-8" />
                </div>
                <div>
                    <label class="block font-medium text-gray-400">Password</label>
                    <input type="password" class="rounded-xl flex-1 outline-none bg-gray-600 w-full font-medium text-gray-300 py-1 px-3 text-sm leading-8" />
                </div>

                <button class="bg-transparent font-semibold hover:bg-gray-700 border-2 text-gray-400 border-gray-700 rounded-xl px-4 py-2 flex-1" @click="screen = 'signin';">
                    Sign In
                </button>
                <button class="bg-transparent font-semibold bg-gray-700 border-2 text-gray-300 border-gray-700 rounded-xl px-4 py-2 flex-1" @click="screen = 'signup'">
                    Get Started
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'blank',
    data() {
        return {
            screen: '',
        }
    },
}
</script>

<style lang="scss" scoped>
.main {
    &::after {
        background-image: url(@/assets/bg.svg);
        z-index: 0;
    }
}
</style>