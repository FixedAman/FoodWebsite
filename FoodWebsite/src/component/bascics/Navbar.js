import React from 'react'

const Navbar = ({filterItem , menuList}) => {
  return (
    <>
       <nav className='navbar'>
        <button className='btn-group'>
          {
            menuList.map((curelem)=>{
                return (<button className='btn-group__item' onClick={() => filterItem(curelem)} >{curelem}</button>);
            })
          }
          
          


        </button>

      </nav>
    </>
  )
}

export default Navbar ;
