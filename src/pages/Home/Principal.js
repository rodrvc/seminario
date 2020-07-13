import React, { useState, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button, Card, Input, AutoComplete } from "antd";
import TaskerList from "../../components/Tasker/TaskerList";
import { SearchOutlined } from "@ant-design/icons";
import logo from "../../assets/cooking.svg";
import iconDoggi from "../../assets/aseo-de-mascotas.svg";
import useAuth from "../../hooks/useAuth";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import "./home.css";
import { getAccess } from "../../api/auth";

import { getTaskersRequired } from "../../api/user";
import Search from "antd/lib/transfer/search";

function Home() {
	const { user } = useAuth(); // verifica auten
	const u = user;
	const token = getAccess();
	const [skill, setSkill] = useState("");
	const [Loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");
	const [arrayTaskers, setArrayTaskers] = useState([null]);
	const [data, setData] = useState({ hits: [] });
	//const [url, setUrl] = useState("http://hn.algolia.com/api/v1/search?query=redux");
	//const [isLoading, setIsLoading] = useState(false);
	//const [isError, setIsError] = useState(false);

	useEffect(() => {
		if (Loading) {
			getTaskersRequired(token, skill)
				.then((response) => {
					console.log(response.users);
					setArrayTaskers(response.users);
				})
				.catch((err) => console.log(err));
		}
		setLoading(!Loading);
	}, [token, skill]);

	const onSearchSeleted = (e) => {
		const value = e;
		setSearch(e);
		console.log(search);
		//setLoading(!Loading);
	};

	function onGetTaskerRequired(value) {
		const selected = search;
		setSkill(selected);
		console.log();
	}

	const options = [
		{ value: "barrer" },
		{ value: "cocinar" },
		{ value: "lavar" },
		{ value: "" },
	];

	if (!user) {
		return <Redirect to="/principal/signin" />;
	}

	return (
		<>
			<div className="register">
				<div className="front">
					<div>
						<h1 className="title">Bienvenido {}</h1>
					</div>
				</div>

				<div className="container-autocomplete">
					<div className="register-form">
						<AutoComplete
							id="Search"
							style={{ width: "600px" }}
							options={options}
							placeholder="Buscas un Servicio...? `b`"
							size="large"
							filterOption={(inputValue, option) =>
								option.value
									.toUpperCase()
									.indexOf(inputValue.toUpperCase()) !== -1
							}
							//value={this.target.value}
							onChange={onSearchSeleted}
						/>
					</div>
				</div>
				<div className="btn-explore">
					<Button
						className="landing-btn"
						type="primary"
						icon={
							<SearchOutlined
								spin={false}
								style={{ fontSize: "40px" }}
							/>
						}
						size={"large"}
						onClick={onGetTaskerRequired}
					>
						EXPLORAR
					</Button>
				</div>
				<div className="icon">
					<img draggable={false} className="icon-item" src={logo} alt="logo" />
					<img className="icon-item doggi" src={iconDoggi} alt="logo" />
				</div>
			</div>
			<div className="list-container">
				{arrayTaskers ? (
					<TaskerList skill={arrayTaskers} />
				) : (
					<TaskerList skill={arrayTaskers} />
				)}
			</div>
		</>
	);
}

export default Home;

// {artistData ? artistData.artistAlbums.items.map(album => {
//       return (
//         <AlbumTag
//           image={album.images[0].url}
//           name={album.name}
//           artists={album.artists}
//           key={album.id}
//         />
//       )
//     })
//     : null}
