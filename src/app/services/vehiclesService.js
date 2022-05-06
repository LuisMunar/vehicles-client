// fetch('http://localhost:8000/vehicles?user=7&page=1&size=100')
//       .then(response => response.json())
//       .then(result => console.log(result))

// fetch('http://localhost:8000/vehicles', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     driver_id: 7,
//     plate: 'plate',
//     model: 'model',
//     type: 'type',
//     capacity: 'capacity'
//   })
// })
//   .then(response => response.json())
//   .then(aaa => console.log(aaa))

// fetch('http://localhost:8000/vehicles', {
//   method: 'PUT',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     id: 10005,
//     plate: 'plate updated I',
//     model: 'model updated I',
//     type: 'type updated I',
//     capacity: 'capacity updated I'
//   })
// })
//   .then(response => response.json())
//   .then(aaa => console.log(aaa))

// fetch('http://localhost:8000/vehicles?id=10005', { method: 'DELETE' })
//   .then(response => response.json())
//   .then(aaa => console.log(aaa))