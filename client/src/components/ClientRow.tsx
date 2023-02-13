import { Client } from '@/types'

const ClientRow = ({ client }: { client: Client }) => {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm">Delete</button>
      </td>
    </tr>
  )
}

export default ClientRow
