import Link from 'next/link'

const Navbar = () => {
    return(
        <nav>
            <div></div>
            <ul>
                <li><Link href={'skills'}>Skills</Link></li>
                <li><Link href={'works'}>Selected Words</Link></li>
                <li><Link href={'contact'}>contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar