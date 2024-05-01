import Image from "next/image"
import Link from "next/link"

export default function SiteHeader() {
    return (
        <header className="flex justify-between mx-auto my-8 px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <Image className="" width={100} height={60} src="/img/diversa.svg" alt="error image"/>
            <nav>
                <ul className="flex gap-5">
                    <li className="hover:underline"><Link href={"/"}>Forside</Link></li>
                    <li className="hover:underline"><a href="https://www.diversa.dk/">www.diversa.dk</a></li>
                </ul>
            </nav>
        </header>
    )
}