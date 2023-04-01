import { LogoComponent } from '@/components';
import { SECONDARY_COLOR } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { loginThunk } from '@/store/thunks';
import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
const { Title } = Typography;

export default function LoginScreen(): ReactElement {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.admin.logged);

  const navigate = useRouter();

  const onFinish = (values: { email: string; password: string }) => {
    dispatch(loginThunk(values));
  };

  if (isLogged) {
    navigate.push('/dashboard');
  }

  return (
    <div className="w-full h-full bg-[#cfd8dc]">
      <Row justify="center" align="middle" className="w-[100vw] h-[100vh]">
        <Col
          xs={22}
          sm={16}
          md={12}
          lg={10}
          xl={8}
          xxl={7}
          className="bg-white rounded-2xl shadow-xl min-h-[450px] py-[30px] text-center"
        >
          <LogoComponent />
          <Title level={3} style={{ color: `${SECONDARY_COLOR}` }}>
            Sign in your account
          </Title>
          <div className="p-[50px]">
            <Form
              form={form}
              layout="vertical"
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please email requred',
                  },
                  {
                    type: 'email',
                    message: 'Please enter a valid email address',
                  },
                ]}
                label={
                  <Typography.Text className="text-[#757575] text-[16px] font-bold">
                    Email
                  </Typography.Text>
                }
              >
                <Input placeholder="example@123.com" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Password required ',
                  },
                ]}
                label={
                  <Typography.Text className="text-[#757575] text-[16px] font-bold">
                    Password
                  </Typography.Text>
                }
              >
                <Input.Password placeholder="**********" />
              </Form.Item>
              <Form.Item>
                <Row>
                  <Col span={12} className="text-left">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={12} className="text-right">
                    <Link className="login-form-forgot" href="/forgot-password">
                      Forgot password
                    </Link>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  className="w-full"
                  // onClick={onFinish}
                  htmlType="submit"
                  //   loading={loading}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
