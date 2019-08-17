const fetchQrCode = (endpoint, payload) => {
    const payload_json = JSON.stringify(payload)
    return fetch(endpoint, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: payload_json
    })
    .then(res => res.json())
    .then(json => json)
}

export default fetchQrCode