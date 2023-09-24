import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

// const { Meta } = Card;

function PostCard({ postTitle, imgUrl, postContent }) {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={postTitle}
          src={imgUrl}
          style={{
            marginBottom: '1rem',
          }}
        />
      }
    >
      <Meta title={postTitle} />
      <p>{postContent}</p>
    </Card>
  );
}

export default PostCard;
