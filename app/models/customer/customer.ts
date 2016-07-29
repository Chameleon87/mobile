import { Phone } from "../../models/phone/phone";
import { Location } from "../../models/location/location";

export class Customer {
    public BusinessName: string;
    public PhysicalAddress: Location;
    public BillingAddress: Location;
    public PhoneNumber: Phone;
}
