import HeaderLayout from "@/components/layouts/Header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import theme from "@/theme/themeConfig";
import React from "react";
import { ConfigProvider } from "antd";
import FooterLayout from "@/components/layouts/Footer";
export default function NormalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={theme}>
        <HeaderLayout>
          <div className="bg-[#F3F3F3] text-[#231F20]">{children}</div>
          <FooterLayout children={undefined} />
        </HeaderLayout>
      </ConfigProvider>
    </AntdRegistry>
  );
}
