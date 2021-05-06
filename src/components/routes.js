import {
	Switch,
	Route,
} from 'react-router-dom';

import {
	TodayILearned,
	FunFact,
} from "../components";

export function Routes() {
	return (
		<Switch>
			<Route path="/today-i-learned">
				<TodayILearned />
			</Route>

			<Route path="/fun-fact">
				<FunFact />
			</Route>

			<Route path="/">
				<h1>This is the home screen</h1>
			</Route>
		</Switch>
	)
}
