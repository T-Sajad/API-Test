import React from 'react'
import substanativeData from '../../data/get-substantive.json'

function Interactions(){
    const interactions = substanativeData.interactions
    return interactions.map((interactions,i)=>(
        <div class='Interactions' key={i} >
        <h3>{`Date: ${interactions.date}`}</h3>
        <h3>{`Sector Name: ${interactions.name}`}</h3>
        <h3>{`Sector_id: ${interactions.sector_id}`}</h3>
      </div>
        )
    );
}

export default Interactions