import {
	useState,
	useCallback,
	createContext,
} from 'react';

export const PayrollContext = createContext({});

export function PayrollProvider({ children }) {
	const [counter, setCounter] = useState(0);

	const increaseCount = useCallback(() => {
		setCounter(counter + 1);
	}, [counter]);

	const value = {
		companyName: `Jake's Company, LLC`,
		ein: '55-677940',
		handleIncreaseCountClick: increaseCount,
	};

	return (
		<PayrollContext.Provider value={value}>
			{ children }
		</PayrollContext.Provider>
	)
}
