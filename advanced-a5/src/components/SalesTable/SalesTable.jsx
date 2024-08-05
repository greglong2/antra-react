import { useEffect, useState } from "react";
import SalesItem from "../SalesItem/SalesItem";

function SalesTable({ saleItems, sumItems }) {

    const [sales, setSales] = useState([]);

    console.log('sale items', saleItems)
    console.log('sum items', sumItems)

    useEffect(() => {

        if (Object.keys(sumItems).length > 0) {

            const nSaleItems = [];

            console.log('had sum items')

            Object.keys(sumItems).forEach(region => {
                nSaleItems.push({
                    region: region,
                    model: 'sum',
                    sales: sumItems[region].total
                })

                nSaleItems.push(...sumItems[region].models);
            })

            setSales(nSaleItems);

        }
        else { setSales(saleItems) }

    }, [saleItems, sumItems]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Region</th>
                        <th>Model</th>
                        <th>Sales</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sales.map((sale, index) => {
                            return <SalesItem key={sale.id} sale={sale} />
                        })
                    }
                </tbody>
            </table>

        </div>
    );
}

export default SalesTable;