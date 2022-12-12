const deleteReport = (id) => {
    const token = sessionStorage.getItem('accessToken')

    return fetch(`http://localhost:3333/api/reports/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export default deleteReport