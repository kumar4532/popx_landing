import { useState } from "react";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem('user'))

        if (
            storedUser &&
            storedUser.email === email &&
            storedUser.password === password
        ) {
            login({
                name: storedUser.name,
                email: storedUser.email,
                password: storedUser?.password
            })
            navigate('/home')
        } else {
            alert('Invalid credentials')
        }

    }

    return (
        <div className='w-md flex flex-col space-y-2 pt-10 px-8 bg-[#F7F8F9] border border-[#F7F8F9]'>
            <h1 className='text-[#1D2226] text-[28px] font-semibold leading-snug'>
                Signin to your
                <br />
                PopX account
            </h1>
            <p className='text-gray-500 text-lg pr-28'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <div className="space-y-6 mt-5">
                <Input
                    placeholder="Enter email address"
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Enter password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleLogin}
                    className='w-full bg-[#CBCBCB] hover:bg-[#0a0a0a] p-3 rounded-md text-base cursor-pointer'
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login