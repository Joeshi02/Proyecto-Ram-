import { useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx"

const Carrusel = () => {
    const links = [
        {
            url: "https://s3-alpha-sig.figma.com/img/ac8a/3749/63891a65ec5b34d48d898f251cb235aa?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gCfuuS6MjNu7EFxtGBOxmZbGVASlnTAXREjaO3NW-PGNwzaaWHXgyCJXeEIXqOTP0NJMTm5AgRnaB8GTJIYqdEHwiCNWhVVE-U98usGWiCB~B8S26iWdtLAS1YyC0~2cAkDY4l31NMuzjQU-beinBWHafte7pnCFRV06P8MV2836nBB1~5dWmSTEZQHYdqzLILGMN0DSHPrCKRbt3Jiv9cU2ZErhISgLRky0Okgd~6MVpIv6i0Ld9Qu2NNNJXyEglRD0ybugZEsEj1rQIV7TjjxfPTKpaq9sFSn3yv9aEfwcYzd3WrIA2fYHuihFt5-74lC6j~W10R-GtvDWgOCpQA__"
        },
        {
            url: "https://s3-alpha-sig.figma.com/img/d175/9e85/af137cf1ca5fd069f9c2874e0c04c683?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zr2gaos8K2f1AzonayRzlWBsjIn9MOaRaFiJV2TN67YnjTv~XEslp7RqyMzuhO1CLmeG5ZicJmi6AiMPukR~TDQWRo2Cu4sNAL0Bkto86pCf~rNxWqmmVTFUjc-pgm6~JMhWaDpufhJAFIGIAgrbBo-WHAKGWrh1~xSu3mh9mcPl6eeGHfPat7E~i9WJ0agzz2ztvpMTP3rs04fZJYnbtXv-Pq-C9FBsa1dWejdQfUp8BCpO7Is~gwq4ZmMCfERyGqxMh~0wX9bQkkTGTdimoUbN5eFiddPppDfgbv-H-~7Tz7FkgSh6vnbx3-A~l4EMcTOzwR2usZOa4aRH8DsYfg__"
        },
        {
            url: "https://s3-alpha-sig.figma.com/img/93cf/bbed/7f6920f39520942cd876bcf8e150575e?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PfkkhlaGM~6PIxjD6dmaddHiwiVoxvOeh3dnznbPAB8lHGgB4Z7YTBWfETMvZPXsUrfsjl8Jh12cLxlMAeA0Nn13kzw2xYvhifa9VuUPPOouMCUgbgkdRKUnuIXKN8NOQmaly-X67U-8a8wwRFD-LIqzIL9l083I9VMOax4kMMkHW8ErVsp9-W~WQqlXMsqmYNMAQ3PaPqorzywtjT7t0xVA7FGM9Ghi5Hauf3mupriS9itp9BZxYstnpaYxRHM0YqiAIC1RmTrA3lLE-JwCbtP4waRtugtxqotdKTyx4gsteyh3-qVGMusNU2kyU06L4keojsnz3488tOWcbkH94Q__"
        },
        {
            url: "https://s3-alpha-sig.figma.com/img/8dc0/3c78/2822f83ef4f7373cac2c067c523a4387?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W6GYHxc~C8p-qx8lXiylOl6wQ3maUjyB69sdB~unhZLoWS9zkVaXDqGAZ6IwdhbLD2mrJ6ruYN0IR0-bkZw0tp4K7pre7rKnTGBIG2isM~pgYmWbPCBMvu18slXFb87PeGM~YN6vuB6BrgyxDRQ-Yj08dQQvw2SLiNyRR5WkH5ADCoOoVj43UrFAONblOEchDBPBZV9fVOQBAgj-WpmpINGeIGeDXz1WYC2uxbSQbX2UwNnRCYFNmjLqQz-kJ0gIr3mM9Gt39ELqgw70mr2EPu725Zy~c2rescU1dbjw4-hABsXSIg8ehbfzmAuN7gv-NQL2V-PtgnqMTQA4XTfRvQ__"
        },
        
    ]
    const [opinion, setOpinion] =useState(0)
    const prevOpinion = () => {
        const firstOpinion = opinion === 0
        const newOpinion = firstOpinion ? links.length - 1 : opinion - 1
        setOpinion(newOpinion)
    }
    const nextOpinion = () => {
        const lastOpinion = opinion === links.length - 1
        const newOpinion = lastOpinion ? 0 : opinion + 1
        setOpinion(newOpinion)
    }
    const goToLink = (slideIndex) => {
        setOpinion(slideIndex)
    }

    return (
        <>
            <div className="max-w-[700px] h-[390px] w-full sm:w-2/3 m-auto py-16 px-4 relative group">
                <div style={{backgroundImage: `url(${links[opinion].url})`}} className="w-full h-full rounded-tr-3xl rounded-bl-3xl bg-center bg-cover duration-500"></div>
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prevOpinion} size={30}/>
                </div>
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextOpinion} size={30}/>
                </div>
                <div className="flex top-4 justify-center py-2">
                    {links.map ((links, slideIndex) => (
                        <div key={slideIndex} 
                        onClick={() => goToLink(slideIndex)} 
                        className="text-2xl cursor-pointer">
                            <RxDotFilled/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Carrusel