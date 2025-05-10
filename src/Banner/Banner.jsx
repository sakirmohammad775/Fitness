
import bannerImage from '../assets/images-2.png'
const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row lg:justify-between w-full">
                    <div>
                        <h1 className="text-7xl font-bold">
                            Get body in <br />
                            <i className='text-7xl italic font-light'>Shape </i> & stay <br />healthy
                        </h1>
                        <p className="py-6 text-gray-500">
                            A huge selection of health and fitness content, healthy recipes <br />
                            and transformation stories to help you get fit and stay fit!
                        </p>
                        <div className='flex flex-wrap gap-4'>
                            <button className="bg-red-500 hover:bg-orange-600 text-white px-8 py-2 rounded-3xl">
                                Join Club Now!
                            </button>
                            <button className="bg-black border-2 rounded-3xl text-white px-10 py-2">
                                Download Now
                            </button>
                        </div>
                    </div>
                    <img
                        src={bannerImage}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
            </div>

        </>
    );
};

export default Banner;