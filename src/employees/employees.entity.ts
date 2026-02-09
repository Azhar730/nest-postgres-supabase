import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string

    @Column()
    position: string

    @Column()
    department: string
}


// export enum EmployeePosition {
//   INTERN = "intern",
//   JUNIOR = "junior",
//   SENIOR = "senior",
//   MANAGER = "manager",
// }
// import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// import { EmployeePosition } from "./employee-position.enum";

// @Entity()
// export class Employee {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   @Column({
//     type: "enum",
//     enum: EmployeePosition,
//     default: EmployeePosition.JUNIOR,
//   })
//   position: EmployeePosition;

//   @Column()
//   department: string;
// }