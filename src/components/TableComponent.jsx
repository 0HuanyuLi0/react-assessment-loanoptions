import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useSelector } from 'react-redux'

function TableComponent() {

  const results = useSelector(state => state.results)

  useEffect(() => {
    console.log(results);
  }, [results])

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Country</th>
            <th>Code</th>
            {/* <th>State</th> */}
            <th>Domain</th>
            <th>Web Link</th>
          </tr>
        </thead>
        <tbody>
          {
            results &&
            results.map((school, index) =>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{school.name}</td>
                <td>{school.country}</td>
                <td>{school.alpha_two_code}</td>
                {/* <td>{school.state-province}</td> */}
                <td>{school.domains.map(d =>
                  <div key={d}>
                    <a href={`http://${d}`} target='_blank'>{d}</a>
                    <br />
                  </div >
                )} </td>
                <td>{school.web_pages.map(l =>
                  <div key={l}>
                    <a href={l} target='_blank'>{l}</a>
                    <br />
                  </div >
                )}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default TableComponent