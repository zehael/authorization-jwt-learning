import React, {useContext, useEffect} from 'react';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";

function App() {
	const {store} = useContext(Context);

	useEffect(() => {
		if (localStorage.getItem("token")) {
			store.checkAuth();
		}
	}, []);

	if (!store.isAuth) {
		return (
			<>
				<h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : "АВТОРИЗУЙТЕСЬ"}</h1>
				<LoginForm />
			</>
		)
	}

  return (
    <div className="App">
	    <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : "АВТОРИЗУЙТЕСЬ"}</h1>
	    <button onClick={() => store.logout()}>Выйти</button>
    </div>
  );
}

export default observer(App);
