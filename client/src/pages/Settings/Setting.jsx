import Sidebar from '../../components/sidebar/Sidebar'
import './setting.css'

export default function Setting() {
  return (
    <div className='setting'>
      <div className="settingWrapper">
        <div className="settingTitle">
            <span className="settingUpdateTitle">
                Update Your Account
            </span>
            <span className="settingDeleteTitle">
                Delete your Account
            </span>
        </div>
            <form  className="settingForm">
                <label>Profile Picture</label>
                <div className="settingPP">
                    <img src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  <input type="file" id='fileInput' style={{display:"none"}} className = "settingPPInput" />
                  <label htmlFor="fileInput"><i className ="settingPPIcon fa-regular fa-circle-user"></i></label>  
                </div>
                <label >UserName</label>
                <input type="text" placeholder='Rohan' />
                <label >Email</label>
                <input type="Email" placeholder='abc@gmail.com' />
                <label >Edit Password</label>
                <input type="password" placeholder='*****' />
                <button className='settingSubmitButton' type='submit'>Update</button>
            </form>
      </div>
      <Sidebar/>
    </div>
  )
}