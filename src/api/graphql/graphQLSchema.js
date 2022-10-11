// https://api-eu-central-1.graphcms.com/v2/ckxidcmyc26eh01xpc7na45t8/master'
export const graphQLEndPoint = 'https://api-ap-northeast-1.hygraph.com/v2/cl46gvjva1yho01z3be7s5dy5/master';
export const Query = `
{
  dynamicContents(first: 1000){
      key
      value
      image {
        url
      }
    }
  }
`;
export const querySetting = `
{
  settings{
      key
      value
    }
  }
`;
