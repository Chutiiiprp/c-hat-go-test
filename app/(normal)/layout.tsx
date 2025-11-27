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
                    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12 sm:py-16">
                        {children}
                    </main>
                </HeaderLayout>
            </ConfigProvider>
        </AntdRegistry>
    );
}