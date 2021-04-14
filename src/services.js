import React from 'react' 

function Services(props){
    return(
        <div class="w3-container">
            <div class="w3-row">
                <div class="w3-third"><h2 class="w3-center w3-blue">{props.offer1}</h2></div>
                <div class="w3-third"><h2 class="w3-center w3-green">{props.offer2}</h2></div>
                <div class="w3-third"><h2 class="w3-center w3-red">{props.offer3}</h2></div>
            </div>
            <div class="w3-row">
                <div class="w3-third"><h2 class="w3-center w3-orange">{props.offer4}</h2></div>
                <div class="w3-third"><h2 class="w3-center w3-purple">{props.offer5}</h2></div>
                <div class="w3-third"><h2 class="w3-center w3-teal">{props.offer6}</h2></div>
            </div>
        </div>
        
    )
}
export default Services