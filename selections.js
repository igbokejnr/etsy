import React from "react";

const Selection= ()=>{
    return(
        <div className="selection-holder">
            <div className="selection-header">
                <p><b>Shop our selections</b></p>
                <p className="items">Items hand-picked by our editors</p>
            </div>

            <div className="selection-img-holder">

                <div className="selection-img">
                    <div className="anniversary-img"></div>
                    <p className="sel-name"><b>Anniversay gifts</b></p>
                </div>

                <div className="selection-img">
                    <div className="him-img"></div>
                    <p className="sel-name"><b>Gifts for Him</b></p>
                </div>

                <div className="selection-img">
                    <div className="her-img"></div>
                    <p className="sel-name"><b>Gifts for Her</b></p>
                </div>

                <div className="selection-img">
                    <div className="personalized-img"></div>
                    <p className="sel-name"><b>Personalized gift ideas</b></p>
                </div>

                <div className="selection-img">
                    <div className="wedding-img"></div>
                    <p className="sel-name"><b>Wedding gifts</b></p>
                </div>

                <div className="selection-img">
                    <div className="housewarming-img"></div>
                    <p className="sel-name"><b>Housewarming gifts</b></p>
                </div>

            </div>
        </div>
    )
    
}
export default Selection;