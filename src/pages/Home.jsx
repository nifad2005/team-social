import Post from '../components/Post'
import useAllPost from '../hooks/useAllPost';

function Home() {
  const [allPost] = useAllPost();
  // console.log(allPost);
  return (
    <div className='md:max-w-[80%] w-full mx-auto'>
        <div>
          {
            allPost.map(post => <Post key={post._id} post={post}></Post>)
          }
        </div>
    </div>
  )
}

export default Home
