import { useEffect, useState } from "react";


const useGraphData = () => {
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        fetch('graphData.json')
            .then(res => res.json())
            .then(data => setGraphData(data));
    },[])

    return [graphData, setGraphData];
}
export default useGraphData;