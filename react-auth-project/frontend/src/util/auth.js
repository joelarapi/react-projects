import { redirect } from 'react-router-dom';

export function getTokenDuration(){
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date (storedExpirationDate);             //calculate the remaining expiration time we need for the token , so we
  const now  = new Date();                                            // can use it on the getAuthToken function to then trigger the logout function in other parts of the program
  const duration = expirationDate.getTime() - now.getTime();           // such as the root layout , in the Root.js file
  return duration
}

export function getAuthToken() {
  const token = localStorage.getItem('token');

  if(!token){
    return;
  }

  const tokenDuration = getTokenDuration();

  if(tokenDuration < 0){
    return 'EXPIRED';
  }
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth');
  }
}