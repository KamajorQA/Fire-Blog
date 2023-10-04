import { useEffect, useState } from 'react';
import { FloatButton, Layout, Pagination } from 'antd';
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { AiOutlineVerticalAlignTop } from 'react-icons/ai';

import { db } from '../firebase';
import { TitleComponent } from '../components/TitleComponent';
import { PostCard } from '../components/PostCard';
const { Content } = Layout;

function HomePage() {
  const postsCollectionRef = collection(db, 'posts');
  const [postsList, setPostsList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const visiblePosts = postsList.slice(
    (currentPage - 1) * postsPerPage,
    postsPerPage * currentPage
  );

  const handlePageChange = (newPageNumber, pageSize) => {
    setCurrentPage(newPageNumber);
  };

  const handlePageSizeChange = (currentPage, pageSize) => {
    setPostsPerPage(pageSize);
  };

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
          alignItems: 'center',
        }}
      >
        <Pagination
          showSizeChanger
          showQuickJumper
          defaultCurrent={1}
          current={currentPage}
          defaultPageSize={3}
          pageSize={postsPerPage}
          pageSizeOptions={[3, 5, 10, 25]}
          total={postsList.length}
          onChange={handlePageChange}
          onShowSizeChange={handlePageSizeChange}
          style={{
            marginBottom: '1rem',
          }}
        />
        {visiblePosts &&
          !!visiblePosts.length &&
          visiblePosts.map((post) => {
            return (
              <PostCard
                {...post}
                key={post.id}
                handleDeletePost={handleDeletePost}
              />
            );
          })}
      </main>
      <FloatButton.BackTop
        icon={<AiOutlineVerticalAlignTop />}
        tooltip={<div>Scroll back to top</div>}
      />
    </Content>
  );
}

export { HomePage };
