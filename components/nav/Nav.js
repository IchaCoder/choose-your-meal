import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import MobileNav from "./MobileNav";
import { useState } from "react";

export default function Nav() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<nav className="flex justify-around bg-primary p-2 text-whiteF">
				<div className="flex">
					<Link href={"/"} className="font-extrabold text-5xl">
						MEALS
					</Link>
				</div>
				<div className="self-center hidden md:inline">
					<Link
						className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear"
						href="/"
					>
						Home
					</Link>
					<Link
						className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear"
						href="/"
					>
						Contact
					</Link>
					<Link
						className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear"
						href="/"
					>
						About
					</Link>
				</div>
				<a
					href="tel:+23324444444"
					className="hidden md:flex items-center hover:tracking-wide transition-all duration-200 ease-linear"
				>
					<FaPhoneAlt /> +233-244-444-44
				</a>
				<FiMenu
					className="md:hidden text-3xl self-center cursor-pointer flex"
					onClick={() => setIsNavOpen(true)}
				/>
			</nav>
			<MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</>
	);
}
