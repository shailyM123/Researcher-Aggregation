import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-academic-primary text-white flex justify-between items-center shadow-sm">
      <div className="font-bold text-lg tracking-tight">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          🎓 Academic Directory
        </Link>
      </div>
      
      <div className="space-x-6 text-sm font-medium">
        <Link href="/search" className="hover:text-academic-orcid transition-colors">
          Search
        </Link>
        <Link href="/account" className="hover:text-academic-orcid transition-colors">
          Account
        </Link>
      </div>
    </nav>
  );
}