//
// This is a skeleton code to handle an action of NUGU SDK.
// Written by Seungho Han, 
// a student of SKKU, SW department.
// Contact: kevhahn97@skku.edu
//

const _ = require('lodash')

class Response {
    constructor(req) {
        this.version = req.version
        this.resultCode = 'OK' //can be modified later
        this.output = {}

        //set your necessary utterance parameters to response
        this.setParameters({
            PARAMETER_NAME: req.action.parameters.PARAMETER_NAME.value
        })

        //set your optional utterance paramters to response
        if (req.action.PARAMETER_NAME.month != undefined) {
            this.setParameters({
                PARAMETER_NAME: req.action.parameters.PARAMETER_NAME.value
            })
        }
    }

    doAction(req) {
        //you can get your necessary paramters here
        var parameter = req.action.parameters.PARAMETER_NAME.value

        //you can get your optional paramters here
        if (req.action.parameters.PARAMETER_NAME != undefined) {
            parameter = req.action.parameters.PARAMETER_NAME.value
        }

        //add backend parameters here
        this.setParameters({
            // KEY : VALUE of your backend paramter
        })
    }

    setParameters(outputKeyAndValues) { //overwrites an object if already exists. Otherwise, it appends the given object.
        this.output = _.assign(this.output, outputKeyAndValues)
    }

}

function main(params) {
    console.log(`HTTP Request ${JSON.stringify(params)}`)
    response = new Response(params)
    response.doAction(params)
    console.log(`HTTP Response: ${JSON.stringify(response)}`)
    return response // if needed, you should use promise object for synchronization
}