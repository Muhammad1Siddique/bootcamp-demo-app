import React from 'react' 

function Services(props){
    return( 
        <div class="w3-container">
            <div class="w3-row">
                <div class="w3-third"><h2 class="w3-center w3-blue w3-padding-64">{props.offer1}</h2></div>
                <div class="w3-third"><h2 class="w3-center w3-green w3-padding-64">{props.offer2}</h2></div>
                <div class="w3-third"><h2 class="w3-center w3-red w3-padding-64">{props.offer3}</h2></div>
            </div>
            <div class="w3-row">
                <div class="w3-third"><h2 class="w3-center w3-brown w3-padding-64">{props.offer4}</h2></div>
                <div class="w3-third"><h2 class="w3-center w3-purple w3-padding-64">{props.offer5}</h2></div>
                <div class="w3-third"><h2 class="w3-center w3-teal w3-padding-64">{props.offer6}</h2></div>
            </div>
        </div>
        
    )
}
export default Services