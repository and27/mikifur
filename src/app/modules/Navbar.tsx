import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="py-6">
        <nav className="flex justify-between items-center">
          <p className="text-xl font-bold">Mififur</p>
          <ul className="flex gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
          </ul>
          <ul className="flex gap-6">
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
