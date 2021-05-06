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

	const decreaseCount = useCallback(() => {
		setCounter(counter - 1);
	})

	const value = {
		companyName: `Jake's Company, LLC`,
		ein: '55-677940',
		handleIncreaseCountClick: increaseCount,
		handleDecreaseCountClick: decreaseCount,
		count: counter,
	};

	return (
		<PayrollContext.Provider value={value}>
			{ children }
		</PayrollContext.Provider>
	)
}
