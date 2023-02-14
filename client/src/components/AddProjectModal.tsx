import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
// import { ADD_PROJECT } from '@/mutations/projectMutations'
import { GET_PROJECTS } from '@/queries/projectQueries'
import { GET_CLIENTS } from '@/queries/clientQueries'
import { Client, Project } from '@/types'

const AddProjectModal = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [clientId, setClientId] = useState('')
  const [status, setStatus] = useState('new')

  // Get Clients for select
  const { loading, error, data } = useQuery(GET_CLIENTS)

  // const [addClient] = useMutation(ADD_PROJECT, {
  //   variables: { name, description, status },
  //   update(cache, { data: { addClient } }) {
  //     const { projects }: { projects: Project[] } = cache.readQuery({
  //       query: GET_PROJECTS,
  //     })!
  //     // Append addClient to clients array with spread operator
  //     cache.writeQuery({
  //       query: GET_PROJECTS,
  //       data: {
  //         clients: [...projects, addProject],
  //       },
  //     })
  //   },
  // })

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (name === '' || status === '' || description === '') {
      return alert('Please fill all fields')
    }
    // addClient({
    //   variables: { name, status, description },
    // })

    setName('')
    setStatus('new')
    setDescription('')
    setClientId('')
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addProjectModal"
          >
            New Project
          </button>

          <div
            className="modal fade"
            id="addProjectModal"
            // tabindex="-1"
            role="dialog"
            aria-labelledby="addProjectModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addProjectModalLabel">
                    New Project
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select
                        id="status"
                        className="form-select"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="new">Not Started</option>
                        <option value="progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Client</label>
                      <select
                        id="clientId"
                        className="form-select"
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                      >
                        <option value="">Select Client</option>
                        {data.clients.map((client: Client) => (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default AddProjectModal
