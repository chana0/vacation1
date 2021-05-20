export class Order {
    constructor(public id: number = 0, public apartmentId: number = 0, public consumerId: number = 0,
        public arrivalTime: Date = new Date(), public departureTime: Date = new Date(), public amountOfUsers: number = 0) {
    }
}
