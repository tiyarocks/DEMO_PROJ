import React from 'react'
const TableList=props=>{
    const tables=props.tables.map(table=>{
            return <TableCard table={table}/>
        }
    )
        return(
            <div className="table table-stripped">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>ETF Price</th>
                        <th>ETF Change Price %</th>
                        <th>Net Asset Value Change%</th>
                        <th>ETF Trading Spread in $</th>
                        <th>Arbitrage in $</th>
                        <th>Flag</th>
                        <th>ETFMover%1</th>
                        <th>ETFMover%2</th>
                        <th>ETFMover%3</th>
                        <th>ETFMover%4</th>
                        <th>ETFMover%5</th>
                        <th>ETFMover%6</th>
                        <th>ETFMover%7</th>
                        <th>ETFMover%8</th>
                        <th>ETFMover%9</th>
                        <th>ETFMover%10</th>
                        <th>Change%1</th>
                        <th>Change%2</th>
                        <th>Change%3</th>
                        <th>Change%4</th>
                        <th>Change%5</th>
                        <th>Change%6</th>
                        <th>Change%7</th>
                        <th>Change%8</th>
                        <th>Change%9</th>
                        <th>Change%10</th>
                    </tr>
                </thead>

                <tbody id="data">
                    {tables}
                </tbody>
            </div>
        )
}
