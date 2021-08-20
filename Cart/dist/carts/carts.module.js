"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsModule = void 0;
const common_1 = require("@nestjs/common");
const carts_service_1 = require("./carts.service");
const carts_resolver_1 = require("./carts.resolver");
const graphql_1 = require("@nestjs/graphql");
const customers_resolver_1 = require("./customers.resolver");
let CartsModule = class CartsModule {
};
CartsModule = __decorate([
    common_1.Module({
        imports: [
            graphql_1.GraphQLFederationModule.forRoot({
                typePaths: ['./src/carts/carts.graphql'],
            }),
        ],
        providers: [carts_resolver_1.CartsResolver, carts_service_1.CartsService, customers_resolver_1.CustomersResolver],
    })
], CartsModule);
exports.CartsModule = CartsModule;
//# sourceMappingURL=carts.module.js.map