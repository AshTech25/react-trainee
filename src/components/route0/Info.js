import React,{ useState } from 'react'
import { SUBMIT_INFO } from '../../actions/types'
import {connect} from 'react-redux'
import {fetchInfo} from '../../actions/submitInfo'

const Info = (props) => {
  
  const [userName,setUserName] = useState('');
  const [email,setEmail] = useState('')
  
  const onsubmit = (e) => {
    
    e.preventDefault();
    fetchInfo(userName,email);
    
  }
  
  
  return (
        <div className="login-box">
        <h2>Form Fill</h2>
        <form onSubmit={onsubmit}>
        <div className="user-box">
        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <label>Username</label>
    </div>
    <div className="user-box">
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <label>Email</label>
    </div>
    <button className='addButton' >Submit +</button>
            
    </form>

    {console.log(props.info.name)}

    
    </div>
    )
}

const mapStateToProps = (state) => {
  return {
    info : {
      name : state.memberInfo.name,
      email : state.memberInfo.email
    }
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return 
//   // {
//   //   fetchInfo()
//   // }
// } ,mapDispatchToProps

export default connect(mapStateToProps)(Info)
