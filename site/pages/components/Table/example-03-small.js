/**
 * cn - 紧凑表格 small
 * en - Small table
 */
import React from 'react'
import { Table } from 'shineout'
import { getData } from 'doc/data/table'

export default function () {
  const columns = [
    {
      title: 'Name',
      render: d => `${d.firstName} ${d.lastName}`,
    },
    {
      title: 'Country',
      render: 'country',
    },
    {
      title: 'Position',
      render: 'position',
    },
    {
      title: 'Office',
      render: 'office',
    },
  ]

  const data = getData(4)

  return (
    <Table keygen="id" size="small" columns={columns} data={data} />
  )
}
