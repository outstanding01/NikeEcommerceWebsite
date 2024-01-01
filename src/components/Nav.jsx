import {headerLogo} from '../assets/images'
// import {hambuger} from '../assets/icons'

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className='flex justify-between items-center max-container'>
            <a href="/"><img 
            src={headerLogo}
            alt="logo"
            width={130}
            height={29}
             /></a>
             <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hideen"></ul>
        </nav>
    </header>
  )
}

export default Nav