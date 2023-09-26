const GET_TOUR_FILTER = `
query getTour($language: LanguageCodeFilterEnum) {
    allTours(where: {language: $language}) {
      nodes {
        tourDetail {
          banner {
            price {
              highestPrice
              lowestPrice
            }
            gallery {
              altText
              sourceUrl
            }
            location
            title
            rate
          }
        }
      }
    }
  }`

  export { GET_TOUR_FILTER }