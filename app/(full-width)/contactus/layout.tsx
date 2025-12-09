import HeaderLayout from "@/components/layouts/Header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import theme from "@/theme/themeConfig";
import React from 'react'
import { ConfigProvider } from "antd";
import FooterLayout from "@/components/layouts/Footer";
export default function NormalLayout({ children }: { children: React.ReactNode }) {
    return (
        <AntdRegistry>
            <ConfigProvider theme={theme}>
                <HeaderLayout>
                    {children}
                    <FooterLayout children={undefined} />
                </HeaderLayout>
            </ConfigProvider>
        </AntdRegistry>
    );
}