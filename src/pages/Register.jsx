import { useState } from 'react'
import { Input } from '../components/Input'
import { Radio } from '../components/Radio'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Register = () => {
    const navigate = useNavigate()
    const { login } = useAuth()

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        agency: ''
    })

    const handleChange = (key, value) => {
        setForm({ ...form, [key]: value })
    }

    const handleRegister = (e) => {
        e.preventDefault()

        login({
            name: form.name,
            email: form.email,
            password: form.password
        })

        navigate('/home')
    }

    return (
        <form
            onSubmit={handleRegister}
            className='w-md flex flex-col justify-between space-y-2 pt-10 px-8 bg-[#F7F8F9]'
        >
            <div className="flex flex-col">
                <h1 className='text-[28px] font-semibold leading-snug'>
                    Create your
                    <br />
                    PopX account
                </h1>

                <div className='space-y-6 mt-8'>
                    <Input label="Full Name" required onChange={e => handleChange('name', e.target.value)} />
                    <Input label="Phone Number" required onChange={e => handleChange('phone', e.target.value)} />
                    <Input label="Email Address" required onChange={e => handleChange('email', e.target.value)} />
                    <Input label="Password" required type="password" onChange={e => handleChange('password', e.target.value)} />
                    <Input label="Company Name" onChange={e => handleChange('company', e.target.value)} />
                </div>

                <div className='mt-6'>
                    <Radio
                        name="agency"
                        values={['Yes', 'No']}
                        label="Are you an Agency?"
                        required
                        onChange={(val) => handleChange('agency', val)}
                    />
                </div>
            </div>

            <button
                type="submit"
                className='w-full bg-[#6C25FF] p-3 font-semibold mb-8 rounded-md text-white'
            >
                Create Account
            </button>
        </form>

    )
}

export default Register