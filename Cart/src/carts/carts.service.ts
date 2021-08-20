import { Injectable } from '@nestjs/common';
import { gql, GraphQLClient } from 'graphql-request';

@Injectable()
export class CartsService {
  async findByCustomerId(customerId: string): Promise<any> {
    const endpoint =
      'https://api.europe-west1.gcp.commercetools.com/majds_demo/graphql';
    const client = new GraphQLClient(endpoint);
    client.setHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: 'Bearer DPYj5TfuTgH4a9CvfE1hr8ZGOIJ0qEcA',
    });
    const query = gql`
      query cart {
        carts(where: "customerId=\\"${customerId}\\"") {
          offset
          count
          total
          results {
            id
            version
            createdAt
            customerId
            anonymousId
            customerEmail
          }
        }
      }
    `;
    let response;
    try {
      const data = await client.request(query);
      response = data.carts;
    } catch (error) {
      console.error(error);
      response = error;
    }
    return response;
  }

  async findAll(): Promise<any> {
    console.log('Got here!');
    const endpoint =
      'https://api.europe-west1.gcp.commercetools.com/majds_demo/graphql';
    const client = new GraphQLClient(endpoint);
    client.setHeaders({
      Authorization: 'Bearer DPYj5TfuTgH4a9CvfE1hr8ZGOIJ0qEcA',
    });
    const query = gql`
      query carts {
        carts {
          offset
          count
          total
          results {
            id
            version
            createdAt
            customerId
            anonymousId
            customerEmail
          }
        }
      }
    `;
    let response;
    try {
      const data = await client.request(query);
      response = data.carts;
    } catch (error) {
      console.error(error);
      response = error;
    }
    return response;
  }

  async findOne(id: string): Promise<any> {
    const endpoint =
      'https://api.europe-west1.gcp.commercetools.com/majds_demo/graphql';
    const client = new GraphQLClient(endpoint);
    client.setHeaders({
      Authorization: 'Bearer DPYj5TfuTgH4a9CvfE1hr8ZGOIJ0qEcA',
    });
    const query = gql`
      query cart{
        cart(id: "${id}") {
          id
          version
          createdAt
          customerId
          anonymousId
          customerEmail
        }
      }
    `;
    const response = await client.request(query);
    return response.cart;
  }
}
