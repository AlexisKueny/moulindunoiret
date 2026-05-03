import { ConfigProvider } from 'antd';

const AntdConfig = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            /* here is your component tokens */
            arrowSize: 24,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default AntdConfig;
