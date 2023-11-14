//Encapsulation
//Encapsulation is the process of hiding the implementation details from the user and only the functionality to the user.
//In TypeScript, we can achieve encapsulation using Access Modifiers.
//Access Modifiers
//Access modifiers are keywords that set the accessibility of properties and methods in a class.
//There are three access modifiers in TypeScript:
//Public
//Private
//Protected
{



    class BankAccount {
        private balance: number;
        constructor(initialBalance: number) {
            this.balance = initialBalance;
        }
        public deposit(amount: number): void {
            this.balance += amount;
        }
        public withdraw(amount: number): void {
            if (amount <= this.balance) {
                this.balance -= amount;
            } else {
                console.log("Insufficient funds");
            }
        }
        public getBalance(): number {
            return this.balance;
        }
    }

    const account = new BankAccount(1000);
    account.deposit(500);
    account.withdraw(200);
    console.log(account.getBalance()); // Output: 1300









}