import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name, asset}) => {

    const newAsset = useContext(AssetContext)
    console.log(newAsset);
    

    return (
        <div>
            <h5>Special : {name}</h5>
            <h5>Asset : {asset}</h5>
            <h5>New Asset : {newAsset}</h5>
        </div>
    );
};

export default Special;