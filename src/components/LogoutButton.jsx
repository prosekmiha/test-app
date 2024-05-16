import React from 'react'

const LogoutButton = () => {

    function logoutHandle() {
        sessionStorage.removeItem('accessToken');
        window.location.href = "/login";
    }

  return (
    <button onClick={logoutHandle} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2">
        Logout
    </button>
  )
}

export default LogoutButton