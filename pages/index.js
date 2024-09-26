import { useRouter } from "next/router"
import { v4 as uuidv4 } from "uuid"
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from "react";

export default function Home() {
  
  const router =  useRouter();
  const [roomId,setRoomId] =useState('')
  const createAndJoin = ()=> {
    const roomId = uuidv4();
    router.push(`/${roomId}`)
  }
  const joinRoom = () =>{
  if(roomId){
    router.push(`/${roomId}`)
  }else{
    alert("provide a valid Room id ")
  }
  }
    return (
   <div className={styles.homeContainer}>
    <h1>Connectify </h1>
    <div className={styles.enterRoom}>
      <input placeholder="enter Room Id" value={roomId} onChange={(e)=> setRoomId(e?.target?.value)}/>
      <button onClick={joinRoom}>Join Room</button>
    </div>
    <span className={styles.sepratorText}>----------OR-----------</span>
    <button onClick={createAndJoin}>
      Create new room
    </button>
   </div>
  )
}

