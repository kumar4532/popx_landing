import { useNavigate } from "react-router-dom"

function Landing() {
    const navigate = useNavigate()

    return (
        <div className='w-md flex flex-col justify-end space-y-0.5 pb-10 px-8 bg-[#F7F8F9] border border-[#F7F8F9]'>
            <h1 className='text-[#1D2226] text-[28px] font-semibold'>
                Welcome to PopX
            </h1>
            <p className='text-gray-500 text-lg pr-28'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <div className='flex flex-col mt-4 gap-4'>
                <button
                    onClick={() => navigate('/sign-up')}
                    className='w-full bg-[#6C25FF] hover:bg-[#896cc4] p-3 font-semibold rounded-md text-base cursor-pointer'
                >
                    Create Account
                </button>
                <button
                    onClick={() => navigate('/login')}
                    className='w-full bg-[#6C25FF4B] hover:bg-[#896cc4] p-3 font-semibold rounded-md text-[#1D2226] cursor-pointer'
                >
                    Already registered? Login
                </button>
            </div>
        </div>
    )
}

export default Landing