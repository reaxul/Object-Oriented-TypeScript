//access modifiers
{



    class BankAccount {
        readonly bankName: string;
        readonly accountNumber: number;
        protected _balance: number;
        private _ownerName: string;

        constructor(id: number, bankName: string, initialBalance: number, ownerName: string) {
            this.bankName = bankName;
            this.accountNumber = id;
            this._balance = initialBalance;
            this._ownerName = ownerName;
        }

        public deposit(amount: number) {
            this._balance += amount;
        }

        public withdraw(amount: number) {
            this._balance -= amount;
        }

        public checkBalance() {
            console.log(`${this._ownerName} has a balance of ${this._balance}`);
        }

    }

    const account1 = new BankAccount(1, "DBS", 100, "John");
    account1.deposit(100);
    account1.withdraw(50);
    account1.checkBalance();

    class StudentAccount extends BankAccount {
        test() {
            console.log(this._balance); //protected
        }
    }











}