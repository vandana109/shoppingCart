import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCartItems', () => {
    it('should return empty object when no cart items', () => {
      const cartItems = service.getCartItems();
      expect(Object.keys(cartItems).length).toBe(0);
    });

    it('should return cart items', () => {
      service.cartItems = {
        12 : { productId: 12, name: 'test'},
        22 : { productId: 22, name: 'test'}
      };
      const cartItems = service.getCartItems();
      expect(Object.keys(cartItems).length).toBe(2);
    });
  });

  describe('addToCartItems', () => {
    it('should add new item to cart items', () => {
      service.cartItems = {};
      const newItem = {
        productId: 123,
        name: 'newItem',
        price: 100
      };
      service.addToCartItems(newItem);
      expect(service.cartCount).toBe(1);
      expect(service.cartItems[123]).toBeDefined();
    });
    it('should increase the quantity of item if already exists', () => {
      service.cartItems = {};
      const newItem = {
        productId: 123,
        name: 'newItem',
        price: 100
      };
      service.addToCartItems(newItem);
      expect(service.cartCount).toBe(1);
      expect(service.cartItems[123]).toBeDefined();
      expect(service.cartItems[123].quantity).toBe(1);
      service.addToCartItems(newItem);
      expect(service.cartCount).toBe(2);
      expect(service.cartItems[123].quantity).toBe(2);
    });
  });

  describe('changeCartCount', () => {
    it('default cartCount should be zero ', () => {
      expect(service.cartCount).toBe(0);
    });

    it('should increase cartCount by one when true is passed as argument ', () => {
      service.cartCount = 10;
      service.changeCartCount(true);
      expect(service.cartCount).toBe(11);
    });

    it('should decrease cartCount by one when false is passed as argument ', () => {
      service.cartCount = 10;
      service.changeCartCount(false);
      expect(service.cartCount).toBe(9);
    });

    it('should not decrease cartCount by one when false is passed as argument and cartCount is less 0', () => {
      service.cartCount = 0;
      service.changeCartCount(false);
      expect(service.cartCount).toBe(0);
    });
  });

  describe('getTotalCartItems', () => {
    it('should return total number of items in the cart, default 0', () => {
      const cartItemsCount = service.getTotalCartItems();
      expect(cartItemsCount).toBe(0);
    });

    it('should return total number of items in the cart', () => {
      service.cartItems = {
        123 : {
          productId: 123,
          name: 'newItem',
          price: 100,
          quantity: 1
        },
        133 : {
          productId: 133,
          name: 'newItem',
          price: 100,
          quantity: 3
        }
      };
      const cartItemsCount = service.getTotalCartItems();
      expect(cartItemsCount).toBe(4);
    });
  });

  describe('getCartCountEmitter', () => {
    it('should return cartCount emitter when invoked', () => {
      service.getTotalCartItems();
    });
  });
});
