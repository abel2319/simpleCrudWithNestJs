import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  NEW = 'New',
  PROGESS = 'Progress',
  DONE = 'Done',
}

@Schema({
  timestamps: true,
})
export class Tasks {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  status: Category;
  /*
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
  */
}

export const TasksSchema = SchemaFactory.createForClass(Tasks);
