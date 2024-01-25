import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"



function Fetch() {

    const [Fetch, setFetch] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const fetchData ="https://fakestoreapi.com/products"
     fetch(fetchData)
     .then(res => res.json())
     .then((data) => {
        console.log(data)
        setFetch(data)
        setLoader(false)
     })

     .catch(err => console.log(err))
    }, [])

    useEffect(()=>{
      Aos.init()
    },[])
    

  return (
    <>
    <h1 className='text-3xl pt-6'>David's Web Store</h1> 

    {loader && <p className='text-center pt-20 text-2xl'>Loading . . .</p>}

    <div style={{ width:"1200px", top:"150px" }}

    className='pb-8 flex flex-wrap gap-8 relative left-20 items-center justify-center'>{Fetch && Fetch.map((item) =>

   <div key={item.id}  

    style={{height:"290px", width:"200px"}}

    className='items-center flex flex-col relative rounded-md gap-2.5 bg-zinc-500 ' data-aos = "fade-right">
        
    <p className='text-white text-sm text-center p-2' data-aos = "fade-right">{item.title}</p>

    <img src={item.image} alt="image" style={{height:"120px", width:"120px" }} data-aos = "fade-right"/>

    <p style={{ bottom:"10px" }} className='text-white absolute' >${item.price}</p>

    </div>)}</div>
    </>
  )
}

export default Fetch