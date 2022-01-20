const PRODUCTS = [
	{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
	{ category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
	{ category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
	{ category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
	{ category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
	{ category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

function ProductTable({ products }) {
	return (
		<table className="table">
			<thead>
				<tr>
					<th>Nom</th>
					<th>Prix</th>
				</tr>
			</thead>
			<tbody></tbody>
		</table>
	);
}

class FilterableProductTable extends React.Component {
	render() {
		const { products } = this.props;
		return <ProductTable products={products} />;
	}
}

ReactDOM.render(<FilterableProductTable products={PRODUCTS} />, document.querySelector("#app"));
