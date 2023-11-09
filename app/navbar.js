

function Navbar() {
    return(
        <>
       <div className="bg-light h-[60px] w-screen">
        <div className="flex">
            <img src={'/images/defacerlogo2.png'} className=" pt-2 pb-1.5 ml-2 w-[140px] h-[60px]"/>
            <div className="bg-black w-[1px] h-[60px] ml-28"></div>
            <div className="flex justify-between w-[60%] items-center ml-10">
            <p className="font-kanit">HOME</p>
            <p className="font-kanit">COLLECTION</p>
            <p className="font-kanit">CREW</p>
            <p className="font-kanit">FAQ</p>
            </div>
            </div>
            <div className="bg-black h-[1px] w-screen"></div>
        </div>
        </>
    )
}

export default Navbar