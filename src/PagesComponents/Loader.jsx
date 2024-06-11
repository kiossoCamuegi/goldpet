import React from 'react'
import { MutatingDots } from 'react-loader-spinner'


function Loader() {
    return (
        <div>
            <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="#bfa87c"
                secondaryColor="#bfa87c"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Loader