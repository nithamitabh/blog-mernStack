import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <img className='writeImg' src="https://images.pexels.com/photos/2776479/pexels-photo-2776479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <form className='writeForm'>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className='writeIcon fas fa-plus'></i>  
            </label>
            <input type="file" id = "fileInput" style={{display:"none"}} />
            <input type="text" placeholder='Title' className='writeInput' autoFocus ={true} />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder='Share your travel story...' type = "text" className='writeInput writeText'></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}
