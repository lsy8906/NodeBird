import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button } from 'antd';
import Head from 'next/head';

const AppLayout = ({ children }) => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.css" />
            </Head>
            <div>
                <Menu mode="horizontal">
                    <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                    <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                    <Menu.Item key="mail">
                        <Input.Search enterButton  style={{ verticalAlign: 'middle' }}  />
                    </Menu.Item>
                </Menu>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                {children}
            </div>
        </>
    )
}

export default AppLayout;