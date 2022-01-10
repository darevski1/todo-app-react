import React from 'react';
import "./profile.css"

const TabOne = ({tabtoogle, tabId}) => {

    return (
        <div className={tabtoogle === tabId ? "row__block active_content" : "row__block"}>
                          1
        </div>
    )
}

export default TabOne;