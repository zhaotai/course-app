import React from "react";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Select from "antd/lib/select";
import Icon from "antd/lib/icon";
import "./index.css";
import { Pages } from "../../App";
import dataLayer from "../../dataLayer";

const { Option } = Select;
const { TextArea } = Input;
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i}>{i}</Option>);
}

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        dataLayer.createArticle(values).then(res => {
          this.props.goto(Pages.List);
        });
        console.log('Received values of form: ', values);
      }
    });
  };

  handleChange = value => {
    console.log(`selected ${value}`);
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const titleError = isFieldTouched('title') && getFieldError('title');
    const tagsError = isFieldTouched('tags') && getFieldError('tags');
    const postError = isFieldTouched('post') && getFieldError('post');
    return (
      <div className="createPost">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item validateStatus={titleError ? 'error' : ''} help={titleError || ''}>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input your title!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="title"
              />,
            )}
          </Form.Item>
          <Form.Item validateStatus={tagsError ? 'error' : ''} help={tagsError || ''}>
            {getFieldDecorator('tags', {
              rules: [{ required: true, message: 'Please input your tags!' }],
            })(
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select tags"
                onChange={this.handleChange}
              >
                {children}
              </Select>,
            )}
          </Form.Item>
          <Form.Item validateStatus={postError ? 'error' : ''} help={postError || ''}>
            {getFieldDecorator('post', {
              rules: [{ required: true, message: 'Please input your post!' }],
            })(
              <TextArea placeholder="Autosize height based on content lines" autosize={{ minRows: 10}} />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedCreatePost = Form.create({ name: 'createPost' })(CreatePost);
export default WrappedCreatePost;
