import { Injectable } from '@nestjs/common';
import { gql, GraphQLClient } from 'graphql-request';

@Injectable()
export class CustomersService {
  async findAll(): Promise<any> {
    const endpoint =
      'https://api.europe-west1.gcp.commercetools.com/majds_demo/graphql';
    const client = new GraphQLClient(endpoint);
    client.setHeaders({
      Authorization: 'Insert Bearer token here',
    });
    const query = gql`
      query customers {
        customers {
          offset
          count
          total
          results {
            id
            version
            email
            firstName
            lastName
          }
        }
      }
    `;
    const response = await client.request(query);
    return response.customers;
  }

  async findOne(id: string): Promise<any> {
    const endpoint =
      'https://api.europe-west1.gcp.commercetools.com/majds_demo/graphql';
    const client = new GraphQLClient(endpoint);
    client.setHeaders({
      Authorization: 'Insert Bearer token here',
    });
    const query = gql`
      query customer {
        customer(id: "${id}") {
          id
          version
          email
          firstName
          lastName
        }
      }
    `;
    const response = await client.request(query);
    return response.customer;
  }
}
