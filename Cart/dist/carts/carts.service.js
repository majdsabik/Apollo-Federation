"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsService = void 0;
const common_1 = require("@nestjs/common");
const graphql_request_1 = require("graphql-request");
let CartsService = class CartsService {
    async findByCustomerId(customerId) {
        const endpoint = 'https://api.europe-west1.gcp.commercetools.com/majds_demo/graphql';
        const client = new graphql_request_1.GraphQLClient(endpoint);
        client.setHeaders({
            Authorization: 'Bearer DPYj5TfuTgH4a9CvfE1hr8ZGOIJ0qEcA',
        });
        const query = graphql_request_1.gql `
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
        }
        catch (error) {
            console.error(error);
            response = error;
        }
        return response;
    }
    async findAll() {
        console.log('Got here!');
        const endpoint = 'https://api.europe-west1.gcp.commercetools.com/majds_demo/graphql';
        const client = new graphql_request_1.GraphQLClient(endpoint);
        client.setHeaders({
            Authorization: 'Bearer DPYj5TfuTgH4a9CvfE1hr8ZGOIJ0qEcA',
        });
        const query = graphql_request_1.gql `
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
        }
        catch (error) {
            console.error(error);
            response = error;
        }
        return response;
    }
    async findOne(id) {
        const endpoint = 'https://api.europe-west1.gcp.commercetools.com/majds_demo/graphql';
        const client = new graphql_request_1.GraphQLClient(endpoint);
        client.setHeaders({
            Authorization: 'Bearer DPYj5TfuTgH4a9CvfE1hr8ZGOIJ0qEcA',
        });
        const query = graphql_request_1.gql `
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
};
CartsService = __decorate([
    common_1.Injectable()
], CartsService);
exports.CartsService = CartsService;
//# sourceMappingURL=carts.service.js.map