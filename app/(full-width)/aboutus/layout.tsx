import HeaderLayout from "@/components/layouts/Header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import theme from "@/theme/themeConfig";
import React from 'react'
import { ConfigProvider } from "antd";
export default function NormalLayout({ children }: { children: React.ReactNode }) {
    return (
        <AntdRegistry>
            <ConfigProvider theme={theme}>
                <HeaderLayout>
                    {children}
                </HeaderLayout>
            </ConfigProvider>
        </AntdRegistry>
    );
}