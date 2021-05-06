import {
	useMemo,
	useState,
	useEffect,
} from 'react';
import axios from "axios";
import {
	Table,
	Spin,
} from 'antd';

import {
	formatDataForTable,
} from "../utilities";

export function FunFact() {
	const [tableData, setTableData] = useState([]);

	useEffect(() => {
		axios.get('https://www.reddit.com/r/funfact.json?limit=10')
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
		<Table columns={ columns } dataSource={ tableData } />
	)
}
