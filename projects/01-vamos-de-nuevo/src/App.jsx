import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const array = [
    {
        "userName": "johndoe123",
        "name": "John Doe",
        "isFollowing": true
    },
    {
        "userName": "janedoe456",
        "name": "Jane Doe",
        "isFollowing": false
    },
    {
        "userName": "bobski789",
        "name": "Bob Smith",
        "isFollowing": true
    },
    {
        "userName": "alicesmith101",
        "name": "Alice Smith",
        "isFollowing": false
    },
    {
        "userName": "charlieb102",
        "name": "Charlie Brown",
        "isFollowing": true
    }
]


export function App() {
    return (
        <div className='App'>
            {
                array.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        name={name}
                        initialIsFollowing={isFollowing}
                    />
                ))
            }
        </div>
    )
}