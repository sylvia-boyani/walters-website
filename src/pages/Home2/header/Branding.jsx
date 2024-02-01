import React from 'react'

export default function Branding() {
    const Data = [
        {
          id: 1,
          title: "Creative Mind",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          title: "Team Management",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          title: "Digital Branding",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 4,
          title: "Digital Marketing",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ]
  return (
    <>
    <section className='branding'>
       <div className='container grid'>
        {Data.map((value) =>{
            return(
                <div  className='box flex'>
                    <div className='txt'>
                       <h1>{value.id}</h1>
                    </div>
                    <div className='para'>
                     <h2>{value.title}</h2>
                     <p>{value.desc}</p>
                    </div>
                </div>
            )
        })}
        
       </div>
    </section>
    </>
  )
}
