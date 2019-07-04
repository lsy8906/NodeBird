import React from 'react'
import { Button, List, Card, Icon } from 'antd'
import NicknameEditForm from '../components/NickNameEditForm';

const Profile = () => {
    return (
        <div>
            <NicknameEditForm />
            <List
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={[ '이승엽', '소미야밥먹자', '여신아밥먹자' ]}
                renderItem={
                    item=> (
                        <List.Item style={{ marginTop: '20px' }}>
                            <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item} /></Card>
                        </List.Item>
                    )
                }
            />
            <List
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={[ '이승엽', '소미야밥먹자', '여신아밥먹자' ]}
                renderItem={
                    item=> (
                        <List.Item style={{ marginTop: '20px' }}>
                            <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item} /></Card>
                        </List.Item>
                    )
                }
            />
        </div>
    )
}

export default Profile