import { useEffect, useState } from "react"

export default function QuestionTimer ({timeout, onTimeout}) {
  const [remainingTime, setRemainingTime] = useState()
  
  setTimeout(onTimeout, timeout);


   
  

  return <progress id="question-time"/>
}