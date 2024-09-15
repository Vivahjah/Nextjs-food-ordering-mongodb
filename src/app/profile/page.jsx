"use client"


import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import UserTabs from "@/components/layouts/UserTabs"
import Image from "next/image";
import axios from "axios";



const ProfilePage = () => {


  const session = useSession();
  const [saved, setSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [uploadingImage, setuploadingImage] = useState(false)
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
    setSaved(false)
    setIsSaving(true)

    try {
      await axios.put('/api/profile', { name: { userName } })
      setSaved(true)
      setIsSaving(false)

    } catch (error) {
      console.log(error);
      setSaved(false)
      setIsSaving(false)

    }


  }

  const handleProfilePictureChange = async (e) => {
    const file = e.target.files[0]
    console.log("mmmmm");
    if (!file) return;

    const formData = new FormData();
    formData.append("profileImage", file)
    setuploadingImage(true);
    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
      setuploadingImage(false);

    } catch (error) {
      console.log(error);
      setuploadingImage(false);
    }

  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Profile
      </h1>
      <div className="max-w-md mx-auto ">
        {saved && <h2 className="text-center bg-green-100 p-3 rounded-lg border border-green-300">Profile Saved!</h2>}
        {isSaving && <h2 className="text-center bg-blue-100 p-3 rounded-lg border border-blue-300">Saving...</h2>}
        <div className="flex gap-2 items-center">
          <div className="p-2 rounded-lg relative">
            <Image className="rounded-lg w-full h-full mb-1" src={session?.data?.user?.image} width={250} height={250} alt="profileImage" />
            <label className="cursor-pointer">
              <input onChange={handleProfilePictureChange} type="file" className="hidden cursor-pointer" />
              <span className="block border p-2 rounded-lg border-gray-300 text-center" type="button">Edit</span>
            </label>
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