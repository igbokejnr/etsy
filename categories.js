import React from "react";

const Categories=()=>{

    return(
        <div>
            <hr></hr>
            <div className="category-holder">

                <div className="hold">
                <p>All categories </p>
                <svg>
                    <path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path>
                </svg>
                </div>

                <div className="hold">
                <p> Clothing </p>
                <svg>
                    <path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path>
                </svg>
                </div>

                <div className="hold">
                <p>Men's Clothing </p>
                <svg>
                    <path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path>
                </svg>
                </div>


                <div className="hold">
                    <p>Shirts & Tees</p>
                    <svg>
                    <path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z"></path>
                    </svg>
                </div>

                <div className="hold">
                    <p className="nums"> (2,977,789 results,with Ads)</p>
                </div>

            </div>

            <div className="shirts"><h1>Shirts & Tees</h1></div>

        </div>
    )
}
export default Categories;