import { Project } from '../../project/entities/project.entity'
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
export class Customer {
  @PrimaryGeneratedColumn()
  public id!: number

  @Column({ type: 'varchar', length: 120, nullable: false })
  public first_name: string

  @Column({ type: 'varchar', length: 120, nullable: false })
  public last_name: string

  @Column({ type: 'varchar', length: 120, nullable: false, unique: true })
  public email: string

  @Column({ type: 'text' , nullable: true })
  public address: string

  @Column({ type: 'boolean', default: false })
  public is_deleted: boolean

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date

  @OneToMany(() => Project, (project) => project.customer , { nullable: true })
  public projects: Project[]
}
