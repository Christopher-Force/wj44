import Will1 from '../assets/video/will.mp4';

export default function Hero () {
    return (
        <div className="relative bg-black grid justify-items-center ">
            <div className="md:mx-20 max-w-4xl grid justify-items-center border-double border-4 mb-8 py-4 pt-8">
                <video className="" style={{objectFit: "fill", width: "70%"}} controls>
                    <source id="myvideo" src={Will1} type="video/mp4" className=''/>
                </video>
            </div>
        </div>
    )
}