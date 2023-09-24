import { Button, Form, Input, message } from 'antd';
const { TextArea } = Input;

function NewPostForm() {
  const [form] = Form.useForm();

  const imgFiller = 'https://svgsilh.com/svg/1479775.svg';

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
  };

  const handlePostSubmit = (values) => {
    if (values.imgUrl?.length === 0 || values.imgUrl === undefined) {
      const arrengedValues = { ...values, imgUrl: imgFiller };
      console.log(arrengedValues);
      message.success('submit success!');
    } else {
      console.log(values);
      message.success('submit success!');
    }
    form.resetFields();
  };

  const handleFormReset = () => {
    form.resetFields();
  };

  const handleSubmitError = () => {
    message.error('submit failed!');
  };

  return (
    <Form
      name="new-post-form"
      layout="horizontal"
      {...layout}
      className="form"
      form={form}
      onFinish={handlePostSubmit}
      onFinishFailed={handleSubmitError}
    >
      <Form.Item
        label="Title"
        name={'postTitle'}
        rules={[
          { required: true, message: 'Title is required' },
          { type: 'string', min: 5 },
        ]}
        required
      >
        <Input placeholder="Please type post title" />
      </Form.Item>
      <Form.Item
        label="Image"
        name={'imgUrl'}
        rules={[{ type: 'url', warningOnly: true }]}
      >
        <Input placeholder="Please type url address for image" />
      </Form.Item>
      <Form.Item
        label="Text"
        name={'postContent'}
        rules={[
          { required: true, message: 'Text is required' },
          { type: 'string', min: 15 },
        ]}
        required
      >
        <TextArea rows={6} placeholder="Please type post content" />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            margin: '0 10px 5px 0',
            fontFamily: 'Great Vibes',
            fontSize: '1rem',
            minWidth: '72px',
          }}
        >
          Submit
        </Button>
        <Button
          htmlType="button"
          onClick={handleFormReset}
          style={{
            fontFamily: 'Great Vibes',
            fontSize: '1rem',
            minWidth: '72px',
          }}
        >
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
}

export { NewPostForm };
