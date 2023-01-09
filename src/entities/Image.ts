import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm'

export type ImageModel = {
    id: number
    path: string
    state: ImageState
}

export enum ImageState {
    ACCEPTED = 'ACCEPTED',
    REJECTED = 'REJECTED',
}

@Entity('images')
class ImageEntity extends BaseEntity {
    @PrimaryColumn()
    id: number

    @Column('varchar')
    path: string

    @Column('enum', { enum: ImageState })
    state: ImageState
}

export default ImageEntity
