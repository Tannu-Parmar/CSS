import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './test.json'

function App() {
  const [count, setCount] = useState(0)
  console.log(data)
  let total = 0

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', justifyContent: 'space-between' }}>
        <h1 style={{ margin: '0' }}>Invoice</h1>
        <div style={{ textAlign: 'right' }}>
          <p>Seller Address : {data[0].SellerDetails.SellerAddress}</p>
          <p>City,State,Zip : {data[0].SellerDetails.City} {data[0].SellerDetails.State}{data[0].SellerDetails.Zip}</p>
          <p>Phone : {data[0].SellerDetails.Phone}</p>
          <p>Email : {data[0].SellerDetails.Email}</p>
          <p>SellerName : {data[0].SellerDetails.SellerName}</p>

        </div>
      </div>
      <table>
        <tr style={{ textAlign: "left" }}>
          <td colSpan={"3"}>
            BILL TO :
          </td>
          <td colSpan={"3"}>
            INVOICE :
          </td>
        </tr>
        <tr style={{ textAlign: "left" }}>
          <td colSpan={"3"}>
            Company Name : {data[0].BuyerDetails.CompanyName}
          </td>
          <td colSpan={"3"}>
            INVOICE :
          </td>
        </tr>
        <tr style={{ textAlign: "left" }}>
          <td colSpan={"3"}>
            Name : {data[0].BuyerDetails.Name}
          </td>
          <td colSpan={"3"}>
            INVOICE :
          </td>
        </tr>
        <tr style={{ textAlign: "left" }}>
          <td colSpan={"3"}>
            Address : {data[0].BuyerDetails.Address}
          </td>
          <td colSpan={"3"}>
            INVOICE :
          </td>
        </tr>

        <tr style={{ textAlign: "left" }}>
          <td colSpan={"3"}>
            City, State, Zip : {data[0].BuyerDetails.City}, {data[0].BuyerDetails.State}, {data[0].BuyerDetails.Zip}
          </td>
          <td colSpan={"3"}>
            INVOICE :
          </td>
        </tr>

        <tr style={{ textAlign: "left" }}>
          <td colSpan={"3"}>
            Phone : {data[0].BuyerDetails.Phone}
          </td>
          <td colSpan={"3"}>
            INVOICE :
          </td>
        </tr>

        <tr style={{ textAlign: "left" }}>
          <td colSpan={"3"}>
            Email : {data[0].BuyerDetails.Email}
          </td>
          <td colSpan={"3"}>
            INVOICE :
          </td>
        </tr>
        <tr >

          <th>
            items
          </th>
          <th>
            decription
          </th>
          <th>
            qauntity
          </th>
          <th>
            price
          </th>
          <th>
            tax
          </th>
          <th>
            amount
          </th>
        </tr>
        {
          data.map((item) => {
            return (
              item.ItemDetails.map((d) => {
                const amount = d.Amount.replace("$", "")
                total += Number(amount)
                return (
                  <tr>
                    <td>
                      {d.ItemName}
                    </td>
                    <td>
                      {d.Description}
                    </td>
                    <td>
                      {d.Quntity}
                    </td>
                    <td>
                      {d.Price}
                    </td>
                    <td>
                      {d.Tax}
                    </td>
                    <td>
                      {d.Amount}
                    </td>
                  </tr>
                )
              })
            )
          })
        }
        <tr>
          <td>

          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
          <td>
            ${total}
          </td>
        </tr>
      </table>
    </>
  )
}

export default App
