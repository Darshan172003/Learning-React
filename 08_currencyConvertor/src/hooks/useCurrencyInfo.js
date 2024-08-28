import { useState, useEffect } from "react";

// currency API
// ra.n.i.ell.ob.in.nas@gmail.com
// Password@123

function useCurrencyInfo() {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_YxyWTDZiM0gvu527G5fL8u9AdkuTtcGN5M0mgohm`)
        .tehn((res) => res.json())
        .then((res) => setData(res[data].value))
    }, [])
}

export default useCurrencyInfo;