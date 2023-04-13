import './singlepost.css'
import { Link } from 'react-router-dom'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <Link to="/post/:postid">
                    <img src="https://images.pexels.com/photos/2734469/pexels-photo-2734469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
                        className='singlePostImg' />
                    <h1 className="singlePostTitle">Lorem ipsum dolor, sit amet.!
                        <div className="singlePostEdit">
                            <i className='singlePostIcon far fa-edit'></i>
                            <i className='singlePostIcon far fa-trash-alt'></i>
                        </div>
                    </h1>
                    <div className="singlePostInfo">
                        <span className='singlePostAuthor'>Author: <b>Roshini</b></span>
                        <span className='singlePostDate'>Just now </span>
                    </div>
                    <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium asperiores dolor sequi corporis tempora perferendis, maxime ipsam vel cumque officiis, quas magni deleniti aliquam dolorum molestiae quos? Sunt, cumque unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore quasi, praesentium repellat alias saepe voluptatum modi maiores molestias hic omnis at dolor sint, maxime beatae recusandae aperiam quaerat harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, amet ratione fugiat sed, excepturi sit repudiandae ad, vitae consectetur itaque debitis! Minus incidunt iusto quisquam ea eos dolores debitis porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet expedita omnis incidunt alias, deleniti unde asperiores! Asperiores, officiis. Ipsum possimus dignissimos rerum voluptatibus excepturi. Facilis consequatur soluta at veniam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque necessitatibus, exercitationem aspernatur consectetur quisquam aliquid aperiam? Inventore tempora, provident quos fugiat et quis debitis nulla dolores exercitationem in magni voluptate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error aliquid neque amet fugit possimus laborum corrupti repudiandae voluptas pariatur quasi consequuntur voluptatum assumenda numquam laboriosam vitae expedita quidem, architecto maxime.</p>
                </Link>
            </div>
        </div>
    )
}
