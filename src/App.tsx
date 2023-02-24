import { useState } from "react"
import { Tweet } from "./components/Tweet"
import './App.css'
import { AppRoutes } from "./Routes"

function App() {
  return(
    <AppRoutes/>
  )


  // const [tweets, setTweets] = useState<string[]>([
  //   'Tweet 1',
  //   'Tweet 2',
  //   'Tweet 3',
  //   'Tweet 4',
  // ])

  // function CreateTweet(){
  //   let index = tweets.length
  //   setTweets([...tweets,`Tweet ${index}`])
  // }
  // return (
  //   <div>
  //     {tweets.map((tweet, index) => {
  //       return <Tweet key={index} text={tweet}/>
  //     })}
  //     <button onClick={CreateTweet}>Adicionar tweet</button>
  //   </div>
  // )
}

export default App
