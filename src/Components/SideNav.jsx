import React from 'react'
import { Link } from 'react-router-dom';


const SideNav = ({isAuthenticated, user, authenticate, handleClick, click, setClick}) => {
  return (
    <nav className= {click ? 'flex flex-col left-[70%] p-5 rounded bg-black m-auto items-end w-[30%] text-white space-x-5 absolute' : 'hidden'}>
    <Link className=' hover:text-yellow-300' to='/assets'>
        Assets
    </Link>
    <Link className='hover:text-yellow-300' to='/swap'>
        Buy & sell NFTSs <span className='text-yellow-300' >NEW!</span>
    </Link>
    <Link className=' hover:text-yellow-300' to='/wallet'>
        My Wallet <span className='text-yellow-300'>NEW!</span>
    </Link>
    <Link className=' hover:text-yellow-300' to='/faq'>
        FAQ
    </Link>
    <Link className=' hover:text-yellow-300' to='/farm'>
        Farm
    </Link>
    <Link className=' hover:text-yellow-300'  to='/'>
        Docs
    </Link>


    <div className="btns flex flex-col pb-4">
                  <div className="pt-4 lg:pt-0 w-24 lg:ml-6 xl:ml-10">
                      <Link to='/swap'><div className="   h-12           text-white    uppercase font-primary font-normal              leading-none     text-sm             block   rounded-lg    lg:rounded-r-none    bg-white     py-3  lg:py-3    px-3   hover:text-white transition          duration-300    cursor-pointer   ">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAYAAAASYli2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAINSURBVHgBrZYtjsJQEMeHZA/QI/QIbLhABQZUDQrTBIEgYVFYFk/YtWCKxjRBEFyDQ5BgcAi4wfYG3fk3fWT6RV+Bf/JS2tf5MV+dlkhTYRga9C4xzDyfzz69S8Ph8Grbduj7vkWvarfbfRmGEVqWFQJMrwihtlotQCIgwJfLZUTPqt/vu4ApII6dTufvqQKxkW2aZgSRQKxvFlVVnK9cYKPRgJemNmy/308kLA3EWi6XrhYM/5w2zgMiHSyrFCgL8QiINRgMHjf7er12ZCHUQrs4jpN7Pd3sHyJUo91uT263232TDaher0dHiL0k7Kt7giAgz/Nctv2s1WpBwjtZCHiJEBmWCVntqUhiL78TMBRC3YjQdIqCc27HCNxsNpPNfjgcrgBJj8qA8jpsf1j33C0Wi1VeMXSAKmw4lQmbQ/CLwEVAPDXIYSJkeYLWST92RTmcz+e/yjYBPB6PLkDS4+12O1KjSwIRHhpaPiWYmcxYJcLtdrtXACQY1zebTZRfTGx4LhsZv3u93gm2mWGBTVQZxjDkd0gCzGskwrvnG4u9sylPCBMhUdzAMJKhATidTicyn5mmTms2m3mUmioYGHiSMK3lntY7Bl4gJ6RRZe0hyzfW0V9FQHiN9FAVwaDonRLPzOpC46aBuS2iK+RzPB6fFBAev/z1AG8wngAsbRFdoXE5p+UtUkW6Xwv/px0ZDTgn2ewAAAAASUVORK5CYII=" alt="" class="h-6 md:h-6 mx-auto" /></div>
                      </Link>
                  </div>

                 

                  <div class="pt-4 lg:pt-0 lg:pl-0 w-24">
                      <Link to="/polygon"><div class="  h-12 text-white uppercase font-primary font-normal leading-none
                      text-sm
                      block
                      rounded-lg  lg:rounded-l-none  bg-gray-500    py-3     lg:py-3
                      px-3  hover:bg-white hover:text-yellow-300
                      transition
                      duration-300
                      cursor-pointer
                    ">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAZCAYAAADNAiUZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPrSURBVHgBrZZbSFRdFMf33MfPr6/000CyGtLEO6J0o6ILRT3VixgVFFQUVA89FJVdyC5U0IWgKCKiC3SDoIeIKAgrH0oDZ8xLN1FiwEqYlLTR0Znpt/IcPU6NOdqCzV7nv/dZ/70ue51jUr+R7Oxsu9ls3oS6LRwOBxkH0e/U19cH1F8Qk/GhqKjI5vf7F5lMpj08zmBYBYc0xCEqLRbLZo/H4xZIjUL6SfPy8jIxXhYKhYohNUfZ38Xajc7OztKmpqbPaqSk+fn5qcFg8BD6GoZOFsb4Cw5wVjD03czZhvc6GNd8Pt+OlpaW7ypGsSQlJT1lXqo0r/H2reQTfFdVVZWntbW1JjEx8TrEPpZzmccw2xnT4uLiElh/qGIMtyknJyekEYYweNpmsx2vrq5u/d1mCmwSe46irvr5MtHgcHPLy8t7VQxiVgN5fUc4S6MRilC9HyHaxWhXoxCrrmCora6u7o9Xwmq1fuvp6fmKOpZUfMXLkL6WmZn5PxW+Qa4Z+67V1NR8GZI0RmnD8BGHw3EGPZSSkvIPYV5NpLbzPBUHTL29vVtyc3OPg12OvN/mmNna2rogXI6hvd3d3X7yXEyhPcH4RZYzlJYueF3sO8f8kj3r5GC6DSkkvfIqCe+M4ZJnZWUVYvAYY7EBloJ6BpkFfJ4BlxS8AttSW1v7ykj6CXAhYMNQZOnp6al2u30PezeowempgKyUCDyXB+wuYDrMmKkGIhqQtAjpNx7+1UAvYy8d53Zzc3OXkczlco2Lj4/fiLqVMVEwDEgTeY96AvUmhB0R7zh5Z4VGnqrB34V0nxCpvguvh+IFRnZipEIACmI+OTsJQaHBpuRWOtZR9vnUECKpoOE8Rk2U559JJ9EFGDwXEQrx5KnWh2erwUV3XztUvRqm4FyTON9PGhEKCV9hBIkeygo8PkUFP5Key0diCn3bO5xPnpG037DkkOq9mpycPAv764E+aGQSbjfhWdne3r6koaHhXkJCwn8YOcsBbqmBtAxbfmkOWh+9kpaW9sDpdC7DOwdkl71er1/WqV4H0z3V9719o0YgUTtSY2OjtLBLkTjXxcZBxopOFMbQ7uTSd6ghpKCgYByts785xNyRjAL5BHK6PyMjIynaHip3MoTnUcdrBw1bVIxCzoVsDmqOBk2nyReDdzFe830NCiiFSetbSy3cUH23Qj+ox6RGIBKuQCBwCnUlRpw6jhOvITlAgcWBl6rBfxuyfp307B8RqYHcBfkhCEpUlCrWrtpdDlJG5dcKNqqcut3u5pKSkrUYleZRqV0vXeQWvMTzZeCrdUKRUXlqFPlXZipmlHEI0U/Twy9E9nCRH90gv2qYHjSFAAAAAElFTkSuQmCC" alt="" class="h-6 md:h-6 pt-1 mx-auto" />
                        </div>
                        </Link>
                        </div>
        </div>
    <div className=" rounded  w-fit p-2 hover:bg-blue-400 bg-yellow-300">
        {!isAuthenticated ? <button onClick={() => authenticate({ signingMessage: "Sign In" })} className='text-brown-500 text-[13px]'>Connect Wallet</button> :
        <div >
            <p>Score: <span>{user.attributes.ethAddress.toString().slice(0,5) + '...'}</span></p>
            </div>}
        
    </div>
   </nav>
  )
}

export default SideNav