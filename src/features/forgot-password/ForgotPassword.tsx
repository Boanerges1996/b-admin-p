import { PRIMARY_COLOR } from '@/constants';
import { Button, Col, Form, Input, Row, Typography } from 'antd';
import React, { ReactElement } from 'react';
const { Title } = Typography;

export default function ForgotPasswordPage(): ReactElement {
  const [form] = Form.useForm();
  return (
    <div>
      <div
        style={{ backgroundColor: '#cfd8dc', width: '100vw', height: '100vh' }}
      >
        <Row
          justify="center"
          align="middle"
          style={{ width: '100vw', height: '100vh' }}
        >
          <Col
            xs={22}
            sm={16}
            md={12}
            lg={10}
            xl={8}
            xxl={7}
            style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              minHeight: '450px',
              paddingTop: '30px',
              textAlign: 'center',
              paddingBottom: '30px',
            }}
          >
            {/* <img
              src={repmeImageUrls.logo}
              alt="reprezent-me logo2"
              width={150}
              height={150}
            /> */}
            <br />
            <br />
            <Title level={3} style={{ color: PRIMARY_COLOR }}>
              Forgot Password
            </Title>
            <br />
            <div style={{ paddingInline: '30px' }}>
              {/* <CAlert color="success">
                Enter your email and instructions will be sent
              </CAlert> */}
            </div>

            <div style={{ paddingInline: '50px' }}>
              <Form
                form={form}
                layout="vertical"
                name="basic"
                initialValues={{
                  remember: true,
                }}
                // onFinish={onFinish}
              >
                <Form.Item
                  name="email"
                  label={
                    <Typography.Text
                      style={{
                        color: '#757575',
                        fontSize: '16px',
                        fontWeight: 'bolder',
                      }}
                    >
                      Email
                    </Typography.Text>
                  }
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!',
                    },
                    {
                      type: 'email',
                      message: 'Please input a valid email!',
                    },
                  ]}
                >
                  <Input placeholder="example@123.com" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    style={{ width: '100%' }}
                    htmlType="submit"
                    // loading={status === 'loading'}
                  >
                    Reset
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
