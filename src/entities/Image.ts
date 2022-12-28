import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity("images")
class Image extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar")
  path: string
}

export default Image
