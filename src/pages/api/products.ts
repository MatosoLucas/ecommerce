export default function handler (req, res) {
  res.status(200).json([
    {
      id: 1,
      title: 'Hamburger',
      description: 'A delicious and juicy simple hamburger made with bread, meat and salad',
      price: 13.9,
      image: '/public/images/burger.png'
    },
    {
      id: 2,
      title: 'Cheeseburger',
      description: 'A delicious and juicy cheeseburger, made with bread, meat, cheese and salad',
      price: 15.9,
      image: '/public/images/burger.png'
    },
    {
      id: 3,
      title: 'Cheesebacon',
      description: 'A delicious and juicy cheesebacon, made with bread, meat, cheese, bacon and salad',
      price: 17.9,
      image: '/public/images/burger.png'
    }
  ]
  )
}
