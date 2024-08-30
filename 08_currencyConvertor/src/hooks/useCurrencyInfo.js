import { useState, useEffect } from "react";

// currency API
// ra.n.i.ell.ob.in.nas@gmail.com
// Password@123
// API key = https://api.currencyapi.com/v3/latest?apikey=cur_live_YxyWTDZiM0gvu527G5fL8u9AdkuTtcGN5M0mgohm

function useCurrencyInfo(currency) {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
        
    }, [data, currency])
}

export default useCurrencyInfo;