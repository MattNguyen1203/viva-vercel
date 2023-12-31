export const GET_RESPONSIBLE_TRAVEL_DATA = `query ($language: LanguageCodeEnum!) {
    page(id: "cG9zdDoxMjg1") {
      translation(language: $language) {
        responsibleTravel {
          banner {
            title
            heading
            subTitle
            button
            backgroundImage {
              altText
              sourceUrl
            }
          }
          main {
            title
            desc
            posts {
              title
              content
              image {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  }`

export const GET_DATA_MENU_RT = `query($language: LanguageCodeEnum!) {
    page(id: "cG9zdDoxMjg1") {
      translation(language: $language) {
        responsibleTravel {
          banner {
            title
            backgroundImage {
              altText
              sourceUrl
            }
          }
          
        }
      }
    }
  }`
