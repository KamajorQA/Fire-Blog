import { useEffect, useState } from 'react';
import { FloatButton, Layout, Pagination } from 'antd';
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { AiOutlineVerticalAlignTop } from 'react-icons/ai';

import { db } from '../firebase';
import { TitleComponent } from '../components/TitleComponent';
import { PostCard } from '../components/PostCard';
const { Content } = Layout;

function HomePage() {
  const [postsList, setPostsList] = useState([]);
  const postsCollectionRef = collection(db, 'posts');

  // useEffect(() => {
  //   onSnapshot(postsCollectionRef, (snapshot) => {
  //     console.log(snapshot.docs);
  //     const data = snapshot.docs.map((doc) => {
  //       return {
  //         id: doc.id,
  //         ...doc.data(),
  //       };
  //     });
  //     console.log(data);
  //     setPostsList(data);
  //   });
  // }, []);

  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    setPostsList(
      data.docs.map((document) => ({ ...document.data(), id: document.id }))
    );
  };

  const handleDeletePost = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
    getPosts();
  };

  useEffect(() => {
    getPosts();
    /* eslint-disable react-hooks/exhaustive-deps*/
  }, []);

  return (
    <Content
      style={{
        padding: '20px 50px',
      }}
    >
      <TitleComponent level={2}>Blog Posts</TitleComponent>

      <main
        className="contentWrapper"
        style={{
          display: 'flex',
          // gap: '1rem',
          alignItems: 'center',
        }}
      >
        <Pagination
          // className="contentWrapper"
          // style={{
          //   display: 'flex',
          //   gap: '1rem',
          //   alignItems: 'center',
          // }}
          showSizeChanger
          showQuickJumper
          defaultPageSize={3}
          pageSizeOptions={[3, 5, 10, 25]}
        />
        {postsList &&
          !!postsList.length &&
          postsList.map((post) => {
            return (
              <PostCard
                {...post}
                key={post.id}
                handleDeletePost={handleDeletePost}
              />
            );
          })}
        {/* </Pagination> */}
      </main>
      <FloatButton.BackTop
        icon={<AiOutlineVerticalAlignTop />}
        tooltip={<div>Scroll back to top</div>}
      />
    </Content>
  );
}

export { HomePage };
