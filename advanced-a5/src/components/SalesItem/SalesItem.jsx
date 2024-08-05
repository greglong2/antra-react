function SalesItem({ sale }) {

    console.log('sale item', sale)

    return (
        <tr>
            <td>
                {sale.region}
            </td>
            <td>
                {sale.model}
            </td>
            <td>
                {sale.sales}
            </td>
        </tr>
    );
}

export default SalesItem;