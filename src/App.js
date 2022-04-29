import {useSelector} from 'react-redux'
import Emaillist from './components/Emaillist';
import Header from './components/Header'
import Login from './components/Login'
import Sent from './components/Sent'
import Sidebar from './components/Sidebar'
import Compose from './components/Compose'
import {selectSendMessageIsOpen} from './features/mailSlice'
import EmailDetail from './components/EmailDetail';
import {BrowserRouter as Router, Switch, Route, Navigate} from "react-router-dom" 
import {selector} from './features/userSlice'
import { useEffect } from 'react';
import { auth } from './firebase';
import {useDispatch} from 'react-redux'
import {signin,signout} from './features/userSlice'

function App() {

const dispatch = useDispatch();
const isMessageOpen = useSelector(selectSendMessageIsOpen);

// const user = "";
const user = useSelector(selector)
console.log(user)

console.log(isMessageOpen)

useEffect(()=>{
auth.onAuthStateChanged((user)=>{
  if(user){
    dispatch(signin({
      displayName:user.displayName,
      photoURL:user.photoURL,
      email:user.email
    }
    ))
  } else {
    dispatch(signout())
  }
})
},[])

  return (
    <Router>
{
  user ? (
<div className="App">
   <Header />
   <div className='app__body'>
   <Sidebar />
   <Switch>
     <Route exact path='/'>
     <Emaillist />
     </Route>
    
 <Route path='/mail'>
   
   <EmailDetail />
   </Route>

   <Route path="/sent">
     <Sent />
   </Route>
   </Switch>
   </div>
{ isMessageOpen && <Compose />}

    </div>
  ) 
  : (
    <Login />
  )
}

    
    </Router>
  );
}

export default App;
