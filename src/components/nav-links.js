import {
	useContext,
} from 'react';
import {
	Link,
} from 'react-router-dom';

import {
	PayrollContext,
} from "../components";

export function NavLinks() {
	const {
		ein,
		companyName,
		count,
	} = useContext(PayrollContext);
	return (
		<nav>
			<h1>Company Name: { companyName } | EIN: { ein } | Number of Clicks: { count }</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>

				<li>
					<Link to="/today-i-learned">Today I Learned</Link>
				</li>

				<li>
					<Link to="/fun-fact">Fun Fact</Link>
				</li>
			</ul>
		</nav>
	)
}
