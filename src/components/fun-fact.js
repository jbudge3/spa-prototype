import {
	useMemo,
	useState,
	useCallback,
	useEffect,
	useContext,
} from 'react';
import axios from "axios";
import {
	Modal,
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

export function FunFact() {
	const [tableData, setTableData] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const {
		count,
		handleDecreaseCountClick,
	} = useContext(PayrollContext);

	useEffect(() => {
		axios.get('https://www.reddit.com/r/funfact.json?limit=10')
			.then(response => setTableData(formatDataForTable(response.data.data.children)));
	}, []);

	const openModal = useCallback(() => setShowModal(true), []);
	const closeModal = useCallback(() => setShowModal(false), []);

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
			<Button onClick={ handleDecreaseCountClick } type="primary">Decrease Number of Clicks</Button>
			<Button onClick={ openModal }>Wanna see the count?</Button>
			<Table columns={ columns } dataSource={ tableData } />
			<Modal title="The count is..." visible={ showModal } onOk={ closeModal } onCancel={ closeModal }>
				<h3>Wow! The count is { count }!</h3>
			</Modal>
		</>
	)
}
