import { useEffect, useState } from 'react';
import { Button, Col, Layout, Row } from 'antd';
import { getDocs, collection } from 'firebase/firestore';

import { db } from '../firebase';
import { TitleComponent } from '../components/TitleComponent';
import PostCard from '../components/PostCard';
const { Content } = Layout;

function HomePage() {
  const [postsList, setPostsList] = useState([]);
  const postsCollectionRef = collection(db, 'posts');

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      // console.log(data);
      setPostsList(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    };
    getPosts();
  });

  return (
    <Content
      style={{
        padding: '20px 50px',
      }}
    >
      <TitleComponent level={2}>Blog Posts</TitleComponent>

      <main className="contentWrapper">
        <h1>Съешь еще этих мягких французских булок</h1>
        <Row justify="center" gutter={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
          <Col span={12}>
            {postsList.map((post) => {
              return <PostCard {...post} key={post.id} />;
            })}
          </Col>
        </Row>
      </main>
      <Button
        type="primary"
        style={{
          fontFamily: 'Great Vibes',
        }}
      >
        Check color & font
      </Button>
    </Content>
  );
}

export { HomePage };
