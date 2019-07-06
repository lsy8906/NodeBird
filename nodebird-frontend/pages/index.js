import React from 'react'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        User: {
            id: 1,
            nickname: '소미야밥먹자',
        },
        content: '첫번째 게시글',
        img: 'http://static.inven.co.kr/image_2011/site_image/lol/dataninfo/icon/skinfull/irelia_splash_6.jpg?v=20190617a'
    }],
}

const Home = () => {
    return (
        <div>
            {dummy.isLoggedIn && <PostForm /> }
            {dummy.mainPosts.map((c) => {
                return (
                   <PostCard key={c} post={c} />
                )
            })}
        </div>
    )
} 

export default Home