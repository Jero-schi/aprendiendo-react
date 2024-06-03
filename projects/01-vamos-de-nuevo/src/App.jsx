import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    return (
        <div className='App'>
            <TwitterFollowCard initialIsFollowing userName='caracol' name='Jeronimo Comaschi'/>
            <TwitterFollowCard initialIsFollowing={false} userName='caracoles' name='Jeronimo'/>
            <TwitterFollowCard initialIsFollowing userName='ardilla' name='Julian'/>
        </div>
    )
}