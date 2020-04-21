const express = require('express')
const db1=require('./db1.json')
const db2=require('./db2.json')
const db3=require('./db3.json')
const db4=require('./db4.json')
const app = express()

app.use(express.json())

fetch("db1.json").then(
    res=>{
        json.parse(res).then(
            dat=>{
                console.log(dat)
                if(dat.ETFName===UserEtfName && dat.dateOfAnalysis===UserDate){

                        var temp=""
                        dat.forEach(element => {
                        temp+="<tr>"
                        temp+="<td>"+element.data["Time"]+"</td>"
                        temp+="<td>"+element.data["ETF Price"]+"</td>"
                        temp+="<td>"+element.data["ETF Change Price %"]+"</td>"
                        temp+="<td>"+element.data["ETF Trading Spread in $"]+"</td>"
                        temp+="<td>"+element.data["Arbitrage in $"]+"</td>"

                        temp+="<td>"+element.data["ETFMover%1"]+"</td>"
                        temp+="<td>"+element.data["ETFMover%2"]+"</td>"
                        temp+="<td>"+element.data["ETFMover%3"]+"</td>"
                        temp+="<td>"+element.data["ETFMover%4"]+"</td>"
                        temp+="<td>"+element.data["ETFMover%5"]+"</td>"
                        temp+="<td>"+element.data["ETFMover%6"]+"</td>"
                        temp+="<td>"+element.data["ETFMover%7"]+"</td>"
                        temp+="<td>"+element.data["ETFMover%8"]+"</td>"
                        temp+="<td>"+element.data["ETFMover%9"]+"</td>"
                        temp+="<td>"+element.data["ETFMover%10"]+"</td>"


                        temp+="<td>"+element.data["Change%1"]+"</td>"
                        temp+="<td>"+element.data["Change%2"]+"</td>"
                        temp+="<td>"+element.data["Change%3"]+"</td>"
                        temp+="<td>"+element.data["Change%4"]+"</td>"
                        temp+="<td>"+element.data["Change%5"]+"</td>"
                        temp+="<td>"+element.data["Change%6"]+"</td>"
                        temp+="<td>"+element.data["Change%7"]+"</td>"
                        temp+="<td>"+element.data["Change%8"]+"</td>"
                        temp+="<td>"+element.data["Change%9"]+"</td>"
                        temp+="<td>"+element.data["Change%10"]+"</td>"
                        
                        temp+="</tr>"
                    
                    }
                }
            }
        )
    }
)
db.sync().then(() => {
    app.listen(7878, () => {
      console.log('started on http://localhost:7878')
    })
})

