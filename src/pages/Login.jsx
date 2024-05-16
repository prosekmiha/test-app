import React, { useState } from 'react'


const Login = () => {

    document.title = "Login";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginUser(credentials) {
        await fetch('https://tat-staging.topapp.si/dashboardapi/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'}
            ,
            body: JSON.stringify( credentials ),
        })
        .then(response => response.json())
        .then(data => {
            !data.error ? updateAccessToken(data.accessToken) : alert(data.error);   
        })
        
    }

    function updateAccessToken(accessToken) {  
        sessionStorage.setItem('accessToken', accessToken);
        window.location.href = "/users"
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
          email,
          password
        });
      }

  return (

    <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Login
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email"className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="example@domain.com" required="" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>

                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>

                    </form>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Login