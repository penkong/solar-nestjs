import {
  Entity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm'

// ---

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  public id!: number

  @Column({
    type: 'enum',
    enum: ['panel', 'battery', 'component', 'stand'],
    nullable: false
  })
  public component: string

  @Column({ type: 'varchar', length: 120, nullable: false, unique: true })
  public model: string

  @Column({ type: 'varchar', length: 120, nullable: false })
  public manufactor: string

  @Column({ type: 'enum', enum: ['bad', 'normal', 'good', 'best', 'used'] })
  public quality: string

  @Column({ type: 'varchar', length: 120 })
  public box_size: string

  @Column({ type: 'float' })
  public length: string

  @Column({ type: 'float' })
  public width: string

  @Column({ type: 'float' })
  public height: boolean

  @Column({ type: 'text' })
  public description: string

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  public createdAt!: Date

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date
}
