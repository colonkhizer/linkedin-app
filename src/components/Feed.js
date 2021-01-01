import CreateIcon from '@material-ui/icons/Create';
import React , { useState , useEffect} from 'react'
import './Feed.css'
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import {db} from '../firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

    const [seed, setSeed] = useState("");
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("");
    const user = useSelector(selectUser)

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp" , "desc")
        .onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
            ) 
        )
        setSeed(Math.floor(Math.random() * 5000))

    }, []);

    // console.log(posts)

    const sendPost = e => {
        e.preventDefault()

        db.collection("posts").add({
            name: user.displayName,
            desc: user.email,
            message: input,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form action="">
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E"/>
                </div>
            </div>
            <FlipMove>
            {posts.map(({id , data: {name , desc , message , photoURL , timestamp}}) => (
                <Post key={id} name={name} desc ={desc} message={message} photoURL={photoURL} timestamp={timestamp} />
            ))}
            </FlipMove>
            {/* <Post/> */}
            {/* <Post name="Khizer" description="Description" message="Message Goes here" photoURL={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/> */}

        </div>
    )
}

export default Feed
