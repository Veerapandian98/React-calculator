import {calculateInvestmentResults, formatter} from '../util/investment.js';

export default function Results({input}) {
    const result = calculateInvestmentResults(input);
    const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
    console.log(result)
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {result.map((value) => {
                    const toatlInterest = value.valueEndOfYear - (value.annualInvestment * value.year) - initialInvestment;
                    const totalInvested = value.valueEndOfYear - toatlInterest;
                 return(<tr key={value.year}>
                    <td>{value.year}</td>
                    <td>{formatter.format(value.valueEndOfYear)}</td>
                    <td>{formatter.format(value.interest)}</td>
                    <td>{formatter.format(toatlInterest)}</td>
                    <td>{formatter.format(totalInvested)}</td>
                </tr>)
            })}
            </tbody>
        </table>
    )
}