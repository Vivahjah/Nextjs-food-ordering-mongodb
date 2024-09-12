"use client"


import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import UserTabs from "@/components/layouts/UserTabs"
import Image from "next/image";
import axios from "axios";



const ProfilePage = () => {


  const session = useSession();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);
  const [userName, setUserName] = useState("")

  const { status } = session;

  // console.log(session);

  useEffect(() => {

    if (status === "authenticated") {
      setUserName(session?.data?.user?.name)

    }
  }, [status, session])




  if (status === 'loading') {
    return "Loading..."
  }

  if (status === 'unauthenticated') {
    redirect('/login')
  }



  if (status === 'unauthenticated') {
    return redirect('/login');
  }

  const handleProfileInfoUpdate = async (e) => {
    e.preventDefault()

    try {
      await axios.put('/api/profile', { name: { userName } })

    } catch (error) {
      console.log(error);

    }


  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Profile
      </h1>
      <div className="max-w-md mx-auto ">
        <div className="flex gap-2 items-center">
          <div className="p-2 rounded-lg relative">
            <Image className="rounded-lg w-full h-full mb-1" src={session?.data?.user?.image} width={250} height={250} alt="profileImage" />
            <button type="button">Edit</button>
          </div>
          <form onSubmit={handleProfileInfoUpdate} className="grow">
            <input type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder="First and last Name" />
            <input type="email" disabled value={session?.data?.user?.email} />
            <button type="submit">Save</button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default ProfilePage