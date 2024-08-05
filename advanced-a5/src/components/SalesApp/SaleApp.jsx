import { useEffect, useState } from "react";
import API from "../../APIs/salesAPI";
import { useFilter } from "../../context/FilterContext";
import SalesTable from "../SalesTable/SalesTable";
import './SalesApp.css';

function SalesApp() {

    const { filters } = useFilter();
    const [sales, setSales] = useState([]);
    const [filteredSales, setFilteredSales] = useState([]);
    const [organizedSales, setOrganizedSales] = useState({});

    useEffect(() => {
        API.getSales().then(data => {
            setSales(data);
            console.log('set sales')
        }).catch(error => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        console.log('sales or filters changed')
        setFilteredSales(sales.filter(sale => {
            return (filters.region === "" || sale.region === filters.region) &&
                (filters.model === "" || sale.model === filters.model);
        }));
    }, [sales, filters]);

    useEffect(() => {

        if (filteredSales.length === 0 || filteredSales === undefined) {
            console.log('no sales to organize')
            setOrganizedSales(undefined);
            return;
        }

        if (filters.region !== "" || filters.model !== "") {
            console.log('ignoring organized sales for specific region and model')
            setOrganizedSales(undefined);
            return;
        }

        const salesByRegion = filteredSales.reduce((map, sale) => {
            if (!map[sale.region]) {
                map[sale.region] = {
                    total: 0,
                    models: [],
                };
            }
            map[sale.region].total += sale.sales;
            map[sale.region].models.push(sale);
            return map;
        }, {});

        console.log('sales by region', salesByRegion)

        setOrganizedSales(salesByRegion);

    }, [filters, filteredSales]);

    console.log('filters', filters)
    console.log('sales', sales)
    console.log('filtered sales', filteredSales)
    console.log('organized', organizedSales)

    return (
        <div className="container">
            {
                organizedSales === undefined ?
                    <SalesTable saleItems={filteredSales} sumItems={{}} /> :
                    <SalesTable sumItems={organizedSales} saleItems={[]} />
            }
        </div>
    );
}

export default SalesApp;