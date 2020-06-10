/**
 * This class handles change for a vending machine.
 *
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
  constructor(amountDue) {
    this.amountDue = amountDue;
    this.cashTendered = 0;
  }

  /**
   * The customer inserts a coin, increasing the cashTendered.
   * The parameter "type" is a string that is either quarter, dime, nickel, or penny
   */
  insertCoin(type) {
    if (type === 'penny') {
        return this.cashTendered += 1;
    } else if (type === 'nickel') {
         return this.cashTendered += 5;
    } else if (type === 'dime') {
        return this.cashTendered += 10;
    } else if (type === 'quarter'){
        return this.cashTendered += 25;
    }
  }

  /**
   * Returns true if enough coins have been inserted to at least meet the amountDue
   */
  isPaymentSufficient() {
    if (this.cashTendered >= this.amountDue) {
      return true;
    } else if (this.cashTendered < this.amountDue) {
      return false;
    }
  }

  giveChange() {
    let numQuarters = 0;
    let numDimes = 0;
    let numNickels = 0;
    let numPennies = 0;
    let changeLeft = this.cashTendered - this.amountDue;
    while (changeLeft > 0) {
      if (changeLeft >= 25) {
        changeLeft -= 25;
        numQuarters++;
      } else if (changeLeft >= 10) {
        changeLeft -= 10;
        numDimes++;
      } else if (changeLeft >= 5) {
        changeLeft -= 5;
        numNickels++;
      } else if (changeLeft >= 1) {
        changeLeft -= 1;
        numPennies++;
      }
    }
    return {
      quarters: numQuarters,
      dimes: numDimes,
      nickels: numNickels,
      pennies: numPennies
    };
  }
}

module.exports = { ChangeHandler };
