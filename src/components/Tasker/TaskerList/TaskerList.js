import React, { useState } from "react";
import { List, Avatar, Space } from "antd";
import "./TaskerList.css";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

export default function TaskerList(props) {
	const { skill } = props;
	console.log(skill);
	const [listTaskers, setlistTaskers] = useState([]);

	const a = [
		{ name: "pedroe", apellido: "alvarado" },
		{ name: "holo", apellido: "alvarado" },
	];

	const listData = [];

	if(!skill)
	console.log("ha ocurrido un problema aqui")


	skill.forEach((element) => {
		console.log("entra al forEach");
		if (!element) {
			return console.log("ya no sigue" + element);
		} else {
			listData.push({
				href: "https://ant.design",
				title: `${element.name}`,
				avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
				description: `Hola a todos soy un experto en lo que ${element.skills[0].skill}`,
				content: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.

                              `,
			});
		}
	});

	// //for (let i = 0; i < 2; i++) {
	// 	listData.push({
	// 		href: "https://ant.design",
	// 		title: `ant design part ${i}`,
	// 		avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
	// 		description:
	// 			"Ant Design, a design language for background applications, is refined by Ant UED Team.",
	// 		content:
	// 			"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
	// 	});
	// }

	const IconText = ({ icon, text }) => (
		<Space>
			{React.createElement(icon)}
			{text}
		</Space>
	);

	return (
		<div className="list-get">
			<List
				itemLayout="vertical"
				size="large"
				pagination={{
					onChange: (page) => {
						console.log(page);
					},
					pageSize: 3,
				}}
				dataSource={listData}
				// footer={
				// 	<div>
				// 		<b>Resultados para </b>
				// 	</div>
				// }
				renderItem={(item) => (
					<List.Item
						key={item.title}
						actions={[
							<IconText
								icon={StarOutlined}
								text="156"
								key="list-vertical-star-o"
							/>,
							<IconText
								icon={LikeOutlined}
								text="156"
								key="list-vertical-like-o"
							/>,
							<IconText
								icon={MessageOutlined}
								text="2"
								key="list-vertical-message"
							/>,
						]}
						extra={
							<img
								width={272}
								alt="logo"
								src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
							/>
						}
					>
						<List.Item.Meta
							avatar={<Avatar src={item.avatar} />}
							title={<a href={item.href}>{item.title}</a>}
							description={item.description}
						/>
						{item.content}
					</List.Item>
				)}
			/>
		</div>
	);
}
