import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwsomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{3,23}$/;
const PWD_REGEX = /^ (?=.*[a-z](?=.*[A-Z])(?=.*[0-9]) (?=.*[!@#$%])).{8, 24}$/;

export default function Register() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  
  const [matchPwd, setPMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocuse, setMatchFocus] = useState(false);

  const [erroMsg, setErrMsg] = useState('');
  const [ success, setSuccess] = useState(false);


  useEffect(()=> {
    userRef.current.focus();
  },[])

  useEffect (()=> {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd ===matchPwd;
    setValidMatch(match);
  } , [pwd, matchPwd])

  useEffect (()=> {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  } , [user])


  useEffect(()=> {
    setErrMsg('');
  }, [user, pwd , matchPwd])
 
  return (
    <section>
      <p ref={errRef} className={errMesg ? 'errmsg' : 'offscreen'} arai-live='assertive'>{errMsg}</p>
    </section>
  )

}
