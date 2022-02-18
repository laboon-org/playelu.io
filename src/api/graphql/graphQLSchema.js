export const graphQLEndPoint = 'https://api-eu-central-1.graphcms.com/v2/ckxidcmyc26eh01xpc7na45t8/master';

export const Query = `
{
  dynamicContents(first: 1000){
      key
      value
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
