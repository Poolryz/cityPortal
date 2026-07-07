"use client"

import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

function SignIn() {
    const { data: session } = useSession()
    if (session) {
        return (
            <div>
                <h1>Logged in!</h1>
            </div>
        )
    }


    return (
        <div className="flex flex-col gap-4 items-center p-4">
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
            {/* <input onChange={(e) => { setIsMailSent(e.target.value) }} className="border border-gray-300 p-2 rounded-md" type="text" placeholder="Email" />
            <input onChange={(e) => { setIsPasswordSent(e.target.value) }} className="border border-gray-300 p-2 rounded-md" type="password" placeholder="Password" />
            <button className="bg-blue-500 text-white p-2 rounded-md">Sign In</button> */}

        </div >
    )
}

export default SignIn;
