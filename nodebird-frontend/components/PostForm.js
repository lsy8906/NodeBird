import React from 'react'
import { Form, Input, Button } from 'antd'

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

const PostForm = () => {
    return (
        <Form style={{ marginBottom: 20 }} encType="multipart/form-data">
            <Input.TextArea maxLength={140} placeholder="어떤 신기한일이 있었나요?" ></Input.TextArea>
            <div>
                <input type="file" multiple hidden />
                <Button>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {dummy.imagePaths.map((v, i) => {
                    return (
                        <div key={v} style={{ display: 'inline-block' }}>
                            <img src={'http://localhost:3065/' + v} style={{ width: '200px' }} alt={v} />
                            <div>
                                <Button>제거</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Form>
    )
}

export default PostForm