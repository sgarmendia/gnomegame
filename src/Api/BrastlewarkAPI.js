function BrastlewarkAPI() {

  function fetchData() {
    const url = `https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`
    return new Promise ((resolve,reject) => {
      fetch(url)
        .then(res => res.json())
        .then(({ Brastlewark }) => resolve(Brastlewark))
        .catch(err => reject(err))
    })
  }

  return {
    fetchData,
  }
}

export default BrastlewarkAPI()