function fetchRetry(url, options = {}, retries = 3) {
  return fetch(url, options)
    .then(res => {
      if (res.ok) return res.json()

      if (retries > 0) {
        return fetchRetry(url, options, retries - 1)
      } else {
        throw new Error(res)
      }
    })
    .catch(console.error)
}