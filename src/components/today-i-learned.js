import {
	useMemo,
	useState,
	useEffect,
	useContext,
} from 'react';
import axios from "axios";
import {
	Button,
	Table,
	Spin,
} from 'antd';

import {
	PayrollContext,
} from "../components";
import {
	formatDataForTable,
} from "../utilities";

export function TodayILearned() {
	const [tableData, setTableData] = useState([]);
	const {
		handleIncreaseCountClick,
	} = useContext(PayrollContext);

	useEffect(() => {
		axios.get('https://www.reddit.com/r/todayilearned.json?limit=10')
			.then(response => setTableData(formatDataForTable(response.data.data.children)));
	}, []);

	const columns = useMemo(() => {
		return [
			{
				title: 'Author',
				dataIndex: 'author',
				key: 'author',
			},
			{
				title: 'Title',
				dataIndex: 'title',
				key: 'title',
			},
			{
				title: 'Number of Comments',
				dataIndex: 'numOfComments',
				key: 'numOfComments',
			},
			{
				title: 'Number of Upvotes',
				dataIndex: 'upvotes',
				key: 'upvotes',
			},
			{
				title: 'Score',
				dataIndex: 'score',
				key: 'score',
			},
		]
	}, []);

	if (!tableData.length) {
		return (
			<Spin size="large" />
		);
	}

	return (
		<>
			<Button onClick={ handleIncreaseCountClick }>Increase Number of Clicks</Button>
			<Table columns={ columns } dataSource={ tableData } />
		</>
	)
}
