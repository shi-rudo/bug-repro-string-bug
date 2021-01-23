import * as React from "react";

const CustomTable = ({}) => {

  const someTitle = "This is a title"
  const somethingElse = 300

  return (
    <table>
      <thead>
      <tr>
        <th>Head1</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{someTitle} {somethingElse}</td>
      </tr>
      </tbody>
    </table>
  )
}

export default CustomTable
