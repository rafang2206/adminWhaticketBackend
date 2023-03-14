import {
    Table,
    Column,
    CreatedAt,
    UpdatedAt,
    Model,
    DataType,
    BeforeCreate,
    BeforeUpdate,
    PrimaryKey,
    AutoIncrement,
    Default,
    HasMany,
    BelongsToMany,
    ForeignKey,
    BelongsTo
  } from "sequelize-typescript";
  import { hash, compare } from "bcryptjs";
  import Ticket from "./Ticket";
  import Queue from "./Queue";
  import UserQueue from "./UserQueue";
  import Whatsapp from "./Whatsapp";
  
  @Table
  class Plan extends Model<Plan> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;
  
    @Column
    nombre: string;
  
    @Column
    maxConnect: number;
  
    @Column
    maxTime: number;
  
    @Column
    maxUsers: number;
  
}
  
  export default Plan;
  