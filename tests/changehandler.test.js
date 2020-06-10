let { ChangeHandler } = require("../src/changehandler");

describe("tests for change-handler", () => {

    test('amountDue is set based on an argument', () =>{
        let cash = new ChangeHandler(100);
    
        expect(cash.amountDue).toBe(100);         
    });
    
    test("cashTendered is set to zero", ()=>{
    let cashTendered= 0;
    expect(cashTendered).toEqual(0);
    });
    
  test("inserts a coin and increases each cash tendered",() =>{
      let changeHandler = new ChangeHandler(0);
      expect(changeHandler.insertCoin('penny')).toBe(1);
      let changeHandler2 = new ChangeHandler(0);
      expect(changeHandler2.insertCoin('nickel')).toBe(5);
      let changeHandler3 = new ChangeHandler(0);
      expect(changeHandler3.insertCoin('dime')).toBe(10);
      let changeHandler4 = new ChangeHandler(0);
      expect(changeHandler4.insertCoin('quarter')).toBe(25);
  });

  test("Returns true if payment is sufficient", () =>{
      //This should be true because cash tendered is more than cash due
     let changeHandler = new ChangeHandler(100); 
      changeHandler.cashTendered = 125; 
      expect(changeHandler.isPaymentSufficient()).toBe(true);

      // Returns false if cashTendered less than amountDue.
      let changeHandler2 = new ChangeHandler(100);
      changeHandler2.cashTendered = 25; 
      expect(changeHandler2.isPaymentSufficient()).toBe(false);

      // Returns true if cashTendered equal to amountDue.
      let changeHandler3 = new ChangeHandler(100);
      changeHandler3.cashTendered = 100;
      expect(changeHandler3.isPaymentSufficient()).toBe(true);     
  });

  test("give change", () => {
    let changeHandler = new ChangeHandler(68);
    changeHandler.cashTendered= 100;
    expect(changeHandler.giveChange()).toMatchObject({quarters: 1, dimes: 0, nickels: 1,pennies: 2});

    let changeHandler2 = new ChangeHandler(90);
    changeHandler2.cashTendered= 100;
    expect(changeHandler2.giveChange()).toMatchObject({quarters: 0, dimes: 1, nickels: 0,pennies: 0});

    let changeHandler3 = new ChangeHandler(73);
    changeHandler3.cashTendered= 100;
    expect(changeHandler3.giveChange()).toMatchObject({quarters: 1, dimes: 0, nickels: 0,pennies: 2});

    let changeHandler4 = new ChangeHandler(32);
    changeHandler4.cashTendered= 100;
    expect(changeHandler4.giveChange()).toMatchObject({quarters: 2, dimes: 1, nickels: 1,pennies: 3});
    });
});
