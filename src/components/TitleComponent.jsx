import { Typography } from 'antd';

const { Title } = Typography;

function TitleComponent({ level, children }) {
  return (
    <Title
      level={level}
      style={{
        textAlign: 'center',
        margin: '1rem 0',
        fontFamily: 'Great Vibes',
      }}
    >
      {children}
    </Title>
  );
}

export { TitleComponent };
