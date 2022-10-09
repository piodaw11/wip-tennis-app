const getQuery = () => {
  const urlSearchParams = new URLSearchParams(window.location.search)

  return Object.fromEntries(urlSearchParams.entries())
}

export default getQuery
