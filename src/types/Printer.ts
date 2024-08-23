import Issue from "./Issue";

type Printer = {
    id: number;
    name: string;
    address: string;
    building: string;
    status: string;
    type: string;
    dt_used: Date;
    issues: Issue;
};

export default Printer;