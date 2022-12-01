function wrapping(gifts) {
  return gifts.map(x=>`${"*".repeat(x.length+2)}\n*${x}*\n${"*".repeat(x.length+2)}`)
}

const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)