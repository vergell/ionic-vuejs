export interface Food {
   id: number
   img_url: string
   name: string
   type: string
   description: string
   price: string
   ratings: {
      average: number
      total: number
   }
}

export interface FoodResponse {
   foods: Food[]
}
export const fakeFoodApiResponse: FoodResponse = {
   foods: [
      {
         id: 0,
         img_url:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60",
         name: "Pepperoni Pizza",
         type: "Italian",
         price: "$12.99",
         description:
            "A juicy beef patty topped with lettuce, tomato, and cheese.",
         ratings: {
            average: 3,
            total: 320,
         },
      },
      {
         id: 1,
         img_url:
            "https://www.cookhomey.com/wp-content/uploads/2021/02/Classic-homemade-hamburger.jpg",
         name: "Classic Burger",
         type: "American",
         price: "$9.99",
         description:
            "A juicy beef patty topped with lettuce, tomato, and cheese.",
         ratings: {
            average: 4,
            total: 215,
         },
      },
      {
         id: 2,
         img_url:
            "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/2/10/0/BT0511-4_Spicy-Tuna-Roll_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382724147395.jpeg",
         name: "Spicy Tuna Roll",
         type: "Japanese",
         price: "$14.99",
         description:
            "A juicy beef patty topped with lettuce, tomato, and cheese.",
         ratings: {
            average: 5,
            total: 102,
         },
      },
      {
         id: 3,
         img_url:
            "https://hot-thai-kitchen.com/wp-content/uploads/2021/10/Untitled-design-5.jpg",
         name: "Pad Thai",
         type: "Thai",
         price: "$11.99",
         description:
            "A juicy beef patty topped with lettuce, tomato, and cheese.",
         ratings: {
            average: 1,
            total: 167,
         },
      },
   ],
}
