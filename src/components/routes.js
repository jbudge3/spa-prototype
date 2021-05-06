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
			<Route path="/spa-prototype/today-i-learned">
				<TodayILearned />
			</Route>

			<Route path="/spa-prototype/fun-fact">
				<FunFact />
			</Route>

			<Route path="/spa-prototype">
				<h1>This is the home screen</h1>
			</Route>
		</Switch>
	)
}
