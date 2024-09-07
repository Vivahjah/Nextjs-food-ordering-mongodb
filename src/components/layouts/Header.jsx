"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";


const links = [
    {title : "Home", href : "/"},
    {title : "Menu", href : "/"},
    {title : "About", href : "/"},
    {title : "Contact", href : "/"},
   

  ]
const Header = () => {
  const session = useSession();
  const userData = session?.data?.user;
  let userName =  userData?.name || userData?.email 
  if(userName && userName.includes(' ')) {
    userName = userName.split(' ')[0]
  }
 

  

  return (
    <header className="flex justify-between items-center">
      <Link href={'/'}className="text-primary text-2xl font-semibold">Diva Pizza</Link>
      <nav className="flex items-center gap-8 font-semibold text-gray-600">
       {links.map((link, i) => (
        <Link key={i} href={link.href}>{link.title}</Link>
       ))}
      </nav>
      {session?.status ==="authenticated" && (
        <div className="flex justify-center items-center gap-2">
          <Link className="font-semibold text-gray-600" href={'/profile'}>Hello, {userName}</Link>
          <button onClick={() => signOut()}  className="bg-primary py-2 px-8 w-fit text-white rounded-full"> Logout</button>
        </div>
      ) }
      {session?.status === "unauthenticated" && (
        <nav className="flex items-center font-semibold text-gray-600  gap-4">
        <Link href={'/login'} >Login</Link>
        <Link href={'/register'} className="bg-primary py-2 px-8 text-white rounded-full"> Register</Link>
      </nav>

      )}
     
      
    </header>
  )
}

export default Header