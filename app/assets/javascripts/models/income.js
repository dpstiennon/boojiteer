/**
 * Created by davidstiennon on 11/11/15.
 */
function income(name, amount, frequency, id){
    this.name = name || '';
    this.amount = amount || 0;
    this.frequency = frequency || 3;
    this.id = id || null
}

income.prototype.monthlyAmount = function() {
    var weeksPerMonth = 4.34524;
    var yearsPerMonth = .0833;
    switch (parseInt(this.frequency)){
        case 0:
            return this.amount;
        case 1:
            return this.amount * weeksPerMonth;
        case 2:
            return (this.amount / 2) * weeksPerMonth;
        case 3:
            return this.amount;
        case 4:
            return this.amount * yearsPerMonth;

    }
}
