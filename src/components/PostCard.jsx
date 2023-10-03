import { Button, Card, Tooltip } from 'antd';
import { FiDelete } from 'react-icons/fi';

import { useUserInfo } from '../hooks/useUserInfo';

const { Meta } = Card;

function PostCard({
  postTitle,
  imgUrl,
  postContent,
  author,
  id,
  handleDeletePost,
}) {
  const { uid } = useUserInfo();
  const isPostAuthor = author.uid === uid ? true : false;

  return (
    <Card
      style={{
        maxWidth: '50%',
        textAlign: 'center',
        position: 'relative',
        margin: '0 auto 1rem auto',
      }}
      cover={<img alt={postTitle} src={imgUrl} />}
    >
      <Meta title={postTitle} />
      <p>{postContent}</p>
      {!!isPostAuthor && (
        <div
          style={{
            position: 'absolute',
            bottom: 10,
            right: -40,
          }}
        >
          <Tooltip title="Delete this blog post of yours">
            <Button
              shape="circle"
              type="dashed"
              danger
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: ' center',
                justifySelf: 'flex-end',
              }}
              ghost
              icon={<FiDelete />}
              onClick={() => handleDeletePost(id)}
            />
          </Tooltip>
        </div>
      )}
    </Card>
  );
}

export { PostCard };
