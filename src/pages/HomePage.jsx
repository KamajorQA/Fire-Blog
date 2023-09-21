import React from 'react';
import { Button, Layout } from 'antd';

import { TitleComponent } from '../components/TitleComponent';
const { Content } = Layout;

function HomePage() {
  return (
    <Content
      style={{
        padding: '20px 50px',
      }}
    >
      <TitleComponent level={2}>Blog Posts</TitleComponent>

      <main className="contentWrapper">
        Content placed here lorem50*5 Съешь еще этих мягких французских булок
        <br />
        <br />
        <br />
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Съешь еще этих мягких французских булок</h1>
        <br />
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h2>Съешь еще этих мягких французских булок</h2>
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
