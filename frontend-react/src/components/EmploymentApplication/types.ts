const stringLitArray = <L extends string>(arr: L[]) => arr;
const gender = stringLitArray(["Male", "Female"]);

export type Modes = "Employee" | "Hirer"
export type Gender = (typeof gender)[number];