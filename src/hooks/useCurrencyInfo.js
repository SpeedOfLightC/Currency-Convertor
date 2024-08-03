import { useEffect, useState } from 'react'


function useCurrencyInfo(currency) {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            setData(response[currency])
            // console.log(data);
        })


    }, [currency])

    return data
}

export default useCurrencyInfo;