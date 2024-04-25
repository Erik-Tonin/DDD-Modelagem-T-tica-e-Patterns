// describe("Customer unit tests", () => {
//     it("should get 1 as result", () => {
//         const result = 1;
//         expect(result).toBe(1);
//     });
//  })

import Address from "../value-object/adress";
import Customer from "./customer";

describe("Customer unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("", "John");
        }).toThrowError("Id is required");
    });

    it("should throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("123", "");
        }).toThrowError("Name is required");
    });

    it("should throw error when id is empty", () => {
        // Arrange
        const customer = new Customer("123", "John");
        // Act
        customer.changeName("Jane");
        //Assert
        expect(customer.name).toBe("Jane");
    });

    it("Should activate customer", () =>{
        const customer = new Customer("1","Customer 1");
        const adress = new Address("Street 1", 123, "13330-250", "Sao Pualo" );
        customer.Address = adress;

        customer.activate();

        expect(customer.isActive()).toBe(true);
    })

    it("Should desactivate customer", () =>{
        const customer = new Customer("1","Customer 1");
        const adress = new Address("Street 1", 123, "13330-250", "Sao Pualo" );
        customer.Address = adress;

        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    })

    it("Should throw error when address is undefined when you activete a customer", () =>{

        expect(() => {
            const customer = new Customer("1","Customer 1");
    
            customer.activate();

        }).toThrowError("Address is mandatory to activate a customer");
    })

    it("should add reward points", () => {
        const customer = new Customer("1", "Customer 1");
        expect(customer.rewardPoints).toBe(0);
    
        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);
    
        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
      });

 });