"use client";
import React, { PropsWithChildren, useState } from 'react';
import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem('Option 1', '1', <PieChartOutlined />),
	getItem('Option 2', '2', <DesktopOutlined />),
	getItem('User', 'sub1', <UserOutlined />, [
		getItem('Tom', '3'),
		getItem('Bill', '4'),
		getItem('Alex', '5'),
	]),
	getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
	getItem('Files', '9', <FileOutlined />),
];

function App({ children }: PropsWithChildren){
	const [collapsed, setCollapsed] = useState(true);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
				<div className="demo-logo-vertical" />
				<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
			</Sider>
			<Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
					items={[
                        getItem('nav1', 1),
                        getItem('nav1', 2),
                        getItem('nav1', 3),
                        getItem('nav1', 4),
                    ]}
					style={{ flex: 1, minWidth: 0 }}
				/>
			</Header>
				<Content style={{ margin: '0 16px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>User</Breadcrumb.Item>
						<Breadcrumb.Item>Bill</Breadcrumb.Item>
					</Breadcrumb>
					<div
						style={{
							// padding: 24,
							// height: 'calc(100% - 112px)',
                            // boxSizing: 'border-box',
							background: colorBgContainer,
							borderRadius: borderRadiusLG,
                            height: 'calc(100% - 64px)',
                            overflow: 'auto',
                            position: 'relative',
                            boxSizing: 'border-box',
						}}
					>
						<div style={{ position: 'absolute', inset: 0, padding: 24, }}>
                            { children }
                        </div>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Meu TCC ©{new Date().getFullYear()} Created by Higor Ferreira Alves Santos &lt;hfashigor@hotmail.com | hfashigor@gmail.com&gt;
				</Footer>
			</Layout>
		</Layout>
	);
};

export default App;