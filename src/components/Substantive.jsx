import React from 'react'
import substanativeData from '../../data/get-substantive.json'
import PercentageList from './PercentageList';

function Percentage(){
    const interactions = substanativeData.interactions;

 const sectorCounts = interactions.reduce((acc, interaction) => {
        const sectorId = interaction.sector_id;
        acc[sectorId] = (acc[sectorId] || 0) + 1;
        return acc;
    }, {});


    const totalInteractions = interactions.length;
    const sectorPercentages = {};

    for (const sectorId in sectorCounts) {
        const count = sectorCounts[sectorId];
        sectorPercentages[sectorId] = ((count / totalInteractions) * 100).toFixed(2);
    }

    return (
        <div>
            <ul>
                {Object.entries(sectorPercentages).map(([sectorId, percentage]) => (
                   <PercentageList key ={sectorId} sectorId={sectorId} percentage={percentage}/>
                ))}
            </ul>
        </div>
    );
}
export default Percentage