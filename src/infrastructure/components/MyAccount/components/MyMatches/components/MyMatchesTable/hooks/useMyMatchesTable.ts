const useMyMatchesTable = () => {
  function createData(
    name: string,
    lastRes: string,
    result: string
  ) {
    return {
      name,
      lastRes,
      result,
      history: [
        {
          phone: '111111111'
        }
      ]
    }
  }

  const rows = [
    createData('Jan Kowalski', 'true', 'W'),
    createData('Jan Kowalski', 'true', 'W'),
    createData('Jan Kowalski', 'true', 'W'),
    createData('Jan Kowalski', 'true', 'W'),
    createData('Jan Kowalski', 'true', 'W'),
    createData('Jan Kowalski', 'true', 'W'),
    createData('Jan Kowalski', 'true', 'W'),
    createData('Jan Kowalski', 'true', 'W'),
    createData('Jan Kowalski', 'true', 'W'),
    createData('Jan Kowalski', 'true', 'W'),
    createData('Jan Kowalski', 'true', 'W'),
    createData('Jan Kowalski', 'true', 'W')
  ]

  return {
    rows
  }
}

export default useMyMatchesTable
