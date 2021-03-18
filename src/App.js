import React, {useEffect, useCallback} from 'react'
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

    const initFetch = useCallback(() => {
    dispatch(logout());
    }, [dispatch]);

    // const initLogin = useCallback(() => {
    //                 dispatch(login({
    //                 email: userAuth.email,
    //                 uid: userAuth.uid,
    //                 displayName: userAuth.displayName,
    //                 photoUrl: userAuth.photoURL
    //             }))
    // }, [dispatch]);

    useEffect((dispatch) => {
        auth.onAuthStateChanged((userAuth) => {
            if(userAuth){
                // User logged in.
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoURL
                }))
                // initLogin();
            } else {
                // User logged out.
                // dispatch(logout())
                initFetch();
            }
        })
    }, [initFetch])

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
