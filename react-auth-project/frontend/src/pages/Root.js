import { Outlet, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData('token')
  const submit = useSubmit();

  useEffect(() => {
    if(!token){
      return;
    }

    if (token === 'EXPIRED'){
      submit(null, {action: '/logout', method: 'post'});
      return
    }


    const tokenDuration = getTokenDuration();         //token duration function is defined in the auth.js file 
    console.log(tokenDuration)

    setTimeout(()=> {
      submit(null, {action: '/logout', method: 'post'});
    }, tokenDuration);   /// token duration =  is 1 hour and it is calculated in milliseconds 1 * 60 * 60 * 1000,  that is how its defined in the backend 

  }, [token, submit])

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
