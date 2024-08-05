import { useFilter } from "../../context/FilterContext";

function SalesTableFilter() {

    const { filters, updateFilters } = useFilter();

    const handleRegionChange = (e) => {
        updateFilters({ region: e.target.value });
    }

    const handleModelChange = (e) => {
        updateFilters({ model: e.target.value });
    }

    console.log('rendered')

    return (
        <div>
            <label>
                Region:
                <select value={filters.region} onChange={handleRegionChange}>
                    <option value="">All</option>
                    <option value="US">US</option>
                    <option value="EU">EU</option>
                    <option value="CA">CA</option>
                </select>
            </label>

            <label>
                Model:
                <select value={filters.model} onChange={handleModelChange}>
                    <option value="">All</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
            </label>

        </div>
    );
}

export default SalesTableFilter;