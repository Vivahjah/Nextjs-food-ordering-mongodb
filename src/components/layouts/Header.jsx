import Link from "next/link";


const links = [
    {title : "Home", href : "/home"},
    {title : "Menu", href : "/home"},
    {title : "About", href : "/home"},
    {title : "Contact", href : "/home"},
    {title : "Login", href : "/home"},

  ]
const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Link href={'/'} className="text-primary text-2xl font-semibold">Diva Pizza</Link>
      <nav className="flex items-center gap-8 font-semibold text-gray-600">
       {links.map((link, i) => (
        <Link className={link.title ==="Login" && "bg-primary py-2 px-8 text-white rounded-full"} key={i} href={link.href}>{link.title}</Link>
       ))}
      </nav>
    </header>
  )
}

export default Header