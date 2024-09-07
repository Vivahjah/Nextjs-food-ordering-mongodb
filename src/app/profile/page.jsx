"use client"


import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import UserTabs from "@/components/layouts/UserTabs"
import Image from "next/image";



const ProfilePage = () => {


  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);

  const session = useSession();
  const { status } = session;
  console.log(session, 'Session');
  // useEffect(() => {
  //   if (status === 'authenticated') {
  //     fetch('/api/profile').then(response => {
  //       response.json().then(data => {
  //         setUser(data);
  //         setIsAdmin(data.admin);
  //         setProfileFetched(true);
  //       })
  //     });
  //   }
  // }, [session, status]);


  if (status === 'loading') {
    return "Loading..."
  }
  if (status === 'unauthenticated') {
    redirect('/login')
  }


  // if (status === 'loading' || !profileFetched) {
  //   return 'Loading...';
  // }

  if (status === 'unauthenticated') {
    return redirect('/login');
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Profile
      </h1>
      <form className="max-w-xs mx-auto border">
        <div className="">
          <Image src={session?.data?.user?.image} width={64} height={64} alt="profileImage"/>
        </div>
      </form>
    </section>
  )
}

export default ProfilePage