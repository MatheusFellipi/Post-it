import { Entity, Column, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("postit")
class PostIt {
  @PrimaryColumn("uuid")
  id!: string;

  @Column("varchar")
  titulo!: string;

  @Column("varchar")
  description!: string;

  @Column("varchar")
  status!: string;

  @UpdateDateColumn()
  update_at!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { PostIt };
