export default function Signup() {
    return (
        <>
            
            <div class="text-center mb-10">
                <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
                <p>Enter your information to register</p>
            </div>
            <div>
                <div class="flex mx-3">
                    <div class="w-1/2 px-3 mb-5">
                        <label for="" class="text-xs font-semibold px-1">First name</label>
                        <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="fa-regular fa-user"></i></div>
                            <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John" />
                        </div>
                    </div>
                    <div class="w-1/2 px-3 mb-5">
                        <label for="" class="text-xs font-semibold px-1">Last name</label>
                        <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="fa-regular fa-user"></i></div>
                            <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith" />
                        </div>
                    </div>
                </div>
                <div class="flex mx-3">
                    <div class="w-full px-3 mb-5">
                        <label for="" class="text-xs font-semibold px-1">Email</label>
                        <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="fa-regular fa-envelope"></i></div>
                            <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                        </div>
                    </div>
                </div>
                <div class="flex mx-3">
                    <div class="w-full px-3 mb-12">
                        <label for="" class="text-xs font-semibold px-1">Password</label>
                        <div class="flex">
                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="fa-solid fa-lock"></i></div>
                            <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                        </div>
                    </div>
                </div>
                <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5">
                        <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                    </div>
                </div>
            </div>
        </>
    )
}
