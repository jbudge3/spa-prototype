import {
	Link,
} from 'react-router-dom';

export function NavLinks() {
	return (
		<nav>
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
