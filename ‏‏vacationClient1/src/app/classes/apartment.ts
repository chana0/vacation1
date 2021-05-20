export class Apartment {
    onload: (rs: any) => void;
    constructor(public id: number = 0, public name: string = "hagefen", public homeownerId: number = 0
        , public street: string = "chazon is", public buildingNumber: number = 12, public floor: number = 1,
        public neighborhood: string = "zicron moshe", public city: string = "jeruselem", public zipCode: string = "1234",
        public beds: number = 10, public amountOfRooms: number = 10,
        public yard: boolean = true, public jacuzzi: boolean = false
        , public pool: boolean = false, public aSynagogueNearby = true
        , public eruvAnTheNeighborhood: boolean = true, public pricePerNight: number = 0
        , public weekendPrice: number = 0, public priceForSaturdayNight: number = 0
        , public moreDetails: string = "jghj", public picture: string = null) {
    }
}
