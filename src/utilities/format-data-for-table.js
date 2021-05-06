export function formatDataForTable(posts) {
	return posts.map((post) => {
		const {
			data: {
				author,
				id,
				num_comments,
				score,
				title,
				ups,
			},
		} = post;

		return {
			key: id,
			id,
			author,
			numOfComments: num_comments,
			score,
			title,
			upVotes: ups,
		};
	})
}
