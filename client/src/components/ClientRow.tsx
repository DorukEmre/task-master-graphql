import { useMutation } from '@apollo/client'
import { DELETE_CLIENT } from '@/mutations/clientMutations'
import { GET_CLIENTS } from '@/queries/clientQueries'
import { GET_PROJECTS } from '@/queries/projectQueries'
import { Client } from '@/types'

const ClientRow = ({ client }: { client: Client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    // // Update cache by setting the data to the response of deleteClient
    // update(cache, { data: { deleteClient } }) {
    //   // Get query from the cache (not a whole new query)
    //   const { clients }: { clients: Client[] } = cache.readQuery({
    //     query: GET_CLIENTS,
    //   })!
    //   // Write to cache setting the data to filter out the client that we deleted
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   })
    // },
  })

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteClient()}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default ClientRow
