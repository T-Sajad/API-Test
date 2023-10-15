function PercentageList({sectorId,percentage}){
    return(
    <ul className="Tab">
        <div className="Percentages" key={sectorId}>
            <h3>
                 Sector ID: {sectorId} 
                 </h3>
            <h3>
                Percentage: {percentage}%
                </h3>
        </div>
    </ul>
     )
}

export default PercentageList