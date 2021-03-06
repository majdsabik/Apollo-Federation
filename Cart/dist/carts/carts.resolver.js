"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const carts_service_1 = require("./carts.service");
let CartsResolver = class CartsResolver {
    constructor(cartsService) {
        this.cartsService = cartsService;
    }
    listCarts() {
        return this.cartsService.findAll();
    }
    findCart(customerId) {
        return this.cartsService.findByCustomerId(customerId);
    }
    showCart(id) {
        return this.cartsService.findOne(id);
    }
};
__decorate([
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CartsResolver.prototype, "listCarts", null);
__decorate([
    graphql_1.Query(),
    __param(0, graphql_1.Args('customerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartsResolver.prototype, "findCart", null);
__decorate([
    graphql_1.Query(),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartsResolver.prototype, "showCart", null);
CartsResolver = __decorate([
    graphql_1.Resolver('Cart'),
    __metadata("design:paramtypes", [carts_service_1.CartsService])
], CartsResolver);
exports.CartsResolver = CartsResolver;
//# sourceMappingURL=carts.resolver.js.map