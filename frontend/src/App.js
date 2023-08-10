import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [posts, setPost] = useState([])
  useEffect(()=>{
    async function fetchPosts(){
      const {data} = await axios.get('https://mndaa.info/mndaa-admin/api/posts/')
      setPost(data)
    }
    fetchPosts()
  },[])
  // console.log(posts);
  return (
    <div className='container-fluid bg-dark'>
          {/* <div className='container py-3'>
          <div className=" row ">
            {
              posts.map((post)=>(
              <div className="col-lg-4" key={post.id}>
                <div  className='text-white'>
                  <img src={post.image} className='img-fluid' />
                  <h4 className='py-3'>{post.title}</h4>
                  <p >{post.category}</p>
                  <div dangerouslySetInnerHTML={{__html: post.description.substring(0, 250)}}></div>
                  <a href='' className='btn btn-danger btn-sm'>Read More</a>
                </div>
              </div>
              ))
            }
          </div>
          </div> */}

          <h1 className='text-white text-center'>hello World</h1>
	  </div>
  )
}

export default App;
