import Country from './Country'

const CountryList = ({ found, showHandler }) => {
    if (found.length === 1) {
        return <Country country={found[0]} />
    } else if (found.length > 10) {
        return <div>Too many matches, specify another file</div>
    } else {
        return (
            <ul>
                {found.map((c, i) => 
                    <li key={i}>
                        {c.name.common}&nbsp; 
                        <button onClick={() => showHandler([ c ])}>show</button>
                    </li>
                )}
            </ul>
        )
    }
}

export default CountryList