import { Button, Card, Tooltip } from 'antd';
import { FiDelete } from 'react-icons/fi';

const { Meta } = Card;

function PostCard({ postTitle, imgUrl, postContent, id, handleDeletePost }) {
  return (
    <Card
      style={{
        maxWidth: '50%',
        textAlign: 'center',
        position: 'relative',
      }}
      cover={<img alt={postTitle} src={imgUrl} />}
    >
      <Meta title={postTitle} />
      <p>{postContent}</p>
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          right: -40,
        }}
      >
        <Tooltip title="Delete this blog post">
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
            onClick={handleDeletePost(id)}
          />
        </Tooltip>
      </div>
    </Card>
  );
}

export default PostCard;
