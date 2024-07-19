import Image from "next/image";

export default function RegisterPage(){
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">
                Register
            </h1>
            <form className="block mt-6 max-w-xs mx-auto">
                <input type="email" placeholder="email" />
                <input type="password" placeholder="pasword" />
                <button type="submit">Register</button>
                <div className="my-4 text-center text-gray-500">or login with providers</div>
                <button className="flex items-center justify-center gap-3">
                    <Image src="/google.png" width={20} height={20} alt="google" />
                    Login with Google
                </button>
            </form>
            <Image src="/1.png" width={200} height={200} alt="t"/>
        </section>
    )
}



