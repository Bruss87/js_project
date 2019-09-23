const baseURL = 'http://localhost:3000/api/questions/'

export default{
  getQuestions(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  updateCard(card){
    return fetch(baseURL + card._id, {
      method: 'PUT',
      body: JSON.stringify(card),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  addCard(card) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
  }
}
