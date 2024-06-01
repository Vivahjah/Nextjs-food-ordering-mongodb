import Link from "next/link";


export default function Home() {
  const links = [
    {title : "Home", href : "/home"},
    {title : "Menu", href : "/home"},
    {title : "About", href : "/home"},
    {title : "Contact", href : "/home"},
    {title : "Login", href : "/home"},

  ]
  return (
  <>
    <header className="flex justify-between items-center">
      <Link href={'/'} className="text-primary text-2xl font-semibold">Diva Pizza</Link>
      <nav className="flex gap-4">
       {links.map((link, i) => (
        <Link key={i} href={link.href}>{link.title}</Link>
       ))}
      </nav>
    </header>
  
  
  </>
  );
}
