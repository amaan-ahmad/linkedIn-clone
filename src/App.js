import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './App.css'
import {auth} from './firebase'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Login from './Login'
import {selectUser, logout, login} from './features/userSlice'

function App() {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()


    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if(userAuth){
                // User logged in.
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoURL
                }))
            } else {
                // User logged out.
                dispatch(logout())
            }
        })
    }, [])

  return (
    <div className="app">
        <Header />

        { !user ? (
            <Login />
        ) : (
            <div className="app__body">
            <Sidebar />
            <Feed />
            {/* Widgets */}
            </div>
        )}
    </div>
  )
}

export default App;
