import {
  Entity,
  Column,
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
    type: 'varchar',
    length: 120,
    nullable: false
  })
  public component: string

  @Column({ type: 'varchar', length: 120, nullable: false })
  public model: string

  @Column({ type: 'varchar', length: 120, nullable: false })
  public manufactor: string

  @Column({ type: 'enum', enum: ['bad', 'normal', 'good', 'best', 'used'] , nullable: true })
  public quality!: string

  @Column({ type: 'varchar', length: 120 , nullable: true})
  public box_size!: string

  @Column({ type: 'float', nullable: true })
  public length!: string

  @Column({ type: 'float' , nullable: true})
  public width!: string

  @Column({ type: 'float' , nullable: true})
  public height!: boolean

  @Column({ type: 'text', nullable: true })
  public description!: string

  @CreateDateColumn({ type: 'timestamp' , nullable: true})
  public createdAt!: Date

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  public updatedAt!: Date
}
