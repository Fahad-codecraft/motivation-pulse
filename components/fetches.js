const getquote = async () => {
  const response = await fetch(process.env.URL, { cache: 'no-store' })
  return await response.json()
}

export { getquote }

