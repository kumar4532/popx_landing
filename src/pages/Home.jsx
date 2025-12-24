import { useAuth } from '../context/AuthContext'

const Home = () => {
  const { user } = useAuth()

  return (
    <div className='w-md flex flex-col bg-[#F7F8F9] border border-[#F7F8F9]'>
      <div className="text-lg pl-8 py-4 shadow-sm bg-white">
        Account Settings
      </div>

      <div className='px-4 pt-6 space-y-6'>
        <div className="flex gap-6">
          <div className="relative">
            <img
              className="rounded-4xl h-18 w-18 object-cover"
              src="/avatar.png"
            />
            <div className="absolute -bottom-1 -right-1">
              <img
                src="/camera_icon.png"
                alt="Camera"
                className="w-5 h-5"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-[15px]">{user.name}</div>
            <div>{user.email}</div>
          </div>
        </div>

        <p className='text-sm text-[#1D2226]'>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

      </div>
      <div className='flex flex-col justify-between h-full'>
        <div className='mt-10 border-b border-gray-400 border-dashed'></div>
        <div className='mb-10 border-b border-gray-400 border-dashed'></div>
      </div>
    </div>
  )
}

export default Home