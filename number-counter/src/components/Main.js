import React from "react";

export default function Main() {
    const [count, setCount] = React.useState(0)

    function rightCount() {
        setCount(function (nums) {
            return nums + 1
        })
    }
    function leftCount() {
        setCount(nums => nums - 1)
    }
        return (
            <div className="main--container">
                <div className="left--container">
                    <h3 className="container--items--left" onClick={leftCount}>-</h3>
                </div>
                <div className="middle--container">
                    <h3 className="container--items--middle">{count}</h3>
                </div>
                <div className="right--container">
                    <h3 className="container--items--right" onClick={rightCount}>+</h3>
                </div>
            </div>

        )

    }


