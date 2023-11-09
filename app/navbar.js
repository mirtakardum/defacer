

function Navbar() {
    return(
        <>
       <div className="bg-light h-[60px] w-screen">
        <div className="flex w-[103%]">
            <img src={'/images/defacerlogo2.png'} className=" pt-2 pb-1.5 ml-2 w-[150px] h-[60px]"/>
            <div className="bg-black w-[1px] h-[60px] ml-28"></div>
                <div className="flex justify-between w-[75%] items-center ml-10">
                    <p className="font-kanit text-black hover:text-grey">HOME</p>
                    <p className="font-kanit text-black hover:text-grey">COLLECTION</p>
                    <p className="font-kanit text-black hover:text-grey">CREW</p>
                    <p className="font-kanit text-black hover:text-grey">FAQ</p>
                    <div className="flex h-[100%] items-center">
                    <img src={'/images/search.png'} className="h-[40%] ml-2 mr-2"/>
                    <img src={'/images/cart.png'} className="h-[40%] ml-2 mr-2"/>
                    <img src={'/images/heart.png'} className="h-[40%] ml-2 mr-3"/>
                    <button type="button" className=" h-[70%] text-light bg-black hover:bg-grey hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-kanit rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">SIGN UP</button>
                    </div>
                </div>
            </div>
            <div className="bg-black h-[1px] w-screen"></div>
        </div>
        </>
    )
}

export default Navbar