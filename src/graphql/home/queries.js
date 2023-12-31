const DATA_HEADER = `
query homePage($id:ID!){
    page (id: $id) {
        home {
          header {
            nav1
            nav2
            nav3
            nav4
            nav5
            nav6
            nav7
          }
        }
      }
}
`

const GET_HOME_PAGE = `query getHomePageData($id:ID!) {
  page(id: $id) {
          home {
        banner {
          fieldGroupName
          text
        }
        survey {
          fieldGroupName
          text
          title
        }
        inspectionTrip {
          fieldGroupName
          title
          slideTrip {
            ... on Tours {
              id
              tourDetail {
                banner {
                  gallery {
                    altText
                    sourceUrl
                  }
                  price {
                    highestPrice
                    lowestPrice
                  }
                  rate
                  title
                  location
                }
              }
            }
          }
        }
        bestTour {
          fieldGroupName
          title
        }
        travelStyle {
          title
          desc
          travelStyleList {
            id
            slug
            banner {
              travelStyleInfo {
                travelStyleName	
                travelStyleImage {
                  altText
                  sourceUrl
                }
                textHomePage
                imageHomePage {
                  id
                  sourceUrl
                  altText
                }
              }
            }
          }
          desc
          title
        }
        representative {
          desc
          title
          members {
            name
            role
            img {
              altText
              sourceUrl
            }
          }
        }
        video {
          thumbnail {
            altText
            sourceUrl
          }
          label {
            line1
            line2
          }
          video {
            mediaItemUrl
            mimeType
          }
          videomb {
            mediaItemUrl
            mimeType
          }
          thumbnailmb {
            altText
            sourceUrl
          }
        }
        customerReview {
          fieldGroupName
          text
          title
          video
          customerReview {
            ... on CustomerReview {
              customerReview {
                title
                location
                time
                image {
                  altText
                  sourceUrl
                }
                authorInformation {
                  country
                  name
                  thumbnail {
                    altText
                    sourceUrl
                  }
                }
                content
              }
            }
          }
          listReview {
            ... on CustomerReview {
              customerReview {
                title
                location
                time
                image {
                  altText
                  sourceUrl
                }
                authorInformation {
                  country
                  name
                  thumbnail {
                    altText
                    sourceUrl
                  }
                }
                content
              }
            }
          }
        }
        blogs {
          fieldGroupName
          title
          listBlog {
            ... on Post {
              id
              excerpt
              title
              slug
              dateGmt
              blogdetail {
								subtitle1
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
              language {
                code
                locale
              }
            }
          }
        }
        footer {
          logoPartner {
            altText
            sourceUrl
          }
          column1 {
            contact {
              title
              content
            }
            linkFb
            linkLinked
            linkInstargram
            linkYoutube
          }
          column2 {
            title
            officesVietnam {
              title
              content
            }
          }
          column3 {
            title
            officesAboard {
              title
              content
            }
          }
          column4 {
            titlePayment
            imgsPayment {
              sourceUrl
              altText
            }
            titleForum
            imgsGallery {
              sourceUrl
              altText
            }
          }
        }
      }
  }
}`

const GET_NEXT_STEP = `query ($language: LanguageCodeEnum!) {
  page(id: "cG9zdDoxMzI5") {
    translation(language: $language) {
      aboutUsReviews {
        steps {
          heading
          step {
            title
          }
        }
      }
    }
  }
}`

const GET_FOOTER = `query getHomePageData {
  page(id: "cG9zdDoxOQ==") {
    translation(language: EN) {
      home {
        footer {
          logoPartner {
            altText
            sourceUrl
          }
          column1 {
            contact {
              title
              content
            }
            linkFb
            linkLinked
            linkInstargram
            linkYoutube
          }
          column2 {
            title
            officesVietnam {
              title
              content
            }
          }
          column3 {
            title
            officesAboard {
              title
              content
            }
          }
          column4 {
            titlePayment
            imgsPayment {
              sourceUrl
              altText
            }
            titleForum
            imgsGallery {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
}
`
export { DATA_HEADER, GET_HOME_PAGE, GET_NEXT_STEP, GET_FOOTER }

