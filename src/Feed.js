import React, {useState, useEffect} from 'react'
import './Feed.css'
import InputOption from "./InputOption"
import Post from './Post'

import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import {db} from './firebase'
import firebase from 'firebase'

function Feed() {

    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        db.collection('posts')
          // Arranges messages from latest(at top) to oldest(at bottom)
          .orderBy('timestamp', 'desc')

          .onSnapshot(snapshot => (
           setPosts(snapshot.docs.map(doc => (
               {
                   id: doc.id,
                   data: doc.data(),
               }
           )))
        ))
    }, [])


    const sendPost = e => {
        //Prevents loss of typed message on hitting Enter.
        e.preventDefault()

        db.collection('posts').add({
            name: 'Mohak sharma',
            description: 'This is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        // Empty input text box on refresh
        setInput('')
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            type="text"
                            placeholder='Start a post' />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption
                        title ='Photo'
                        Icon = {ImageIcon}
                        color = '#70B5F9' />

                    <InputOption
                        title ='Video'
                        Icon = {SubscriptionsIcon}
                        color = '#E7A33E' />

                    <InputOption
                        title ='Event'
                        Icon = {EventNoteIcon}
                        color = '#C0CBCD' />

                    <InputOption
                        title ='Write Article'
                        Icon = {CalendarViewDayIcon}
                        color = '#7FC15E' />
                </div>
            </div>

            {posts.map(({id, data: {name, description, message, photoUrl} }) => (
                <Post
                    key = {id}
                    name = {name}
                    description = {description}
                    message = {message}
                    photoUrl = {photoUrl}
                />
            ))}

{/*         <Post
                // style={{backgroundColor:hover ? "#0a66c2" : "gray"}}
                name='Mohak Sharma'
                description='This is a test message.'
                message='Wow this worked.'
            /> */}

        </div>
    )
}

export default Feed
