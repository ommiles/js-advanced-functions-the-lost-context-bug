let configuration = {
    frontContent: "Happy Birthday, Odin One-Eye!",
    insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
    closing: {
        "Thor": "Admiration, respect, and love",
        "Loki": "Your son"
    },
    signatories: [
        "Thor",
        "Loki"
    ]
}

let printCard = function() {
    console.log(this.frontContent)
    console.log(this.insideContent)
    let contextBoundForEachExpr = function(signatory){
        let message = `${this.closing[signatory]}, ${signatory}`
        console.log(message)
    }.bind(this)

    this.signatories.forEach(contextBoundForEachExpr)
}

printCard.call(configuration)