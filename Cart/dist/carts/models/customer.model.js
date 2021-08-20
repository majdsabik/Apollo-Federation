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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const eager_import_0 = require("./cart.model");
const graphql_1 = require("@nestjs/graphql");
const cart_model_1 = require("./cart.model");
let Customer = class Customer {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => String }, cart: { nullable: true, type: () => require("./cart.model").Cart } };
    }
};
__decorate([
    graphql_1.Field(() => String),
    graphql_1.Directive('@external'),
    __metadata("design:type", String)
], Customer.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => cart_model_1.Cart),
    __metadata("design:type", cart_model_1.Cart)
], Customer.prototype, "cart", void 0);
Customer = __decorate([
    graphql_1.ObjectType(),
    graphql_1.Directive('@extends'),
    graphql_1.Directive('@key(fields: "id")')
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=customer.model.js.map