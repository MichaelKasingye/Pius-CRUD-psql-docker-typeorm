import { Connection } from 'typeorm';
import { Channel } from './entities/Channel.entity';
import { Tag } from './entities/Tag.entity';
import { User } from './entities/User.entity';
import { Video } from './entities/Video.entity';

export async function smokeTest(connection: Connection) {
  // demonstrates how to create and save entities in db
  // normally you would put that in a service layer behind a REST API
  const user = new User();
  user.age = 15;
  user.firstName = 'John';
  user.lastName = 'Smith';

  await connection.manager.save(user);
  console.log('Saved a new user with id: ' + user.id);

  const channel = new Channel();
  channel.name = 'Pius the Coder';
  channel.user = user;
  await connection.manager.save(channel);
  console.log('Saved a new user with id: ' + channel.id);

  const tag1 = new Tag();
  tag1.name = 'Typescript';
  await connection.manager.save(tag1);
  console.log('Saved a new tag with id: ' + tag1.id);

  const tag2 = new Tag();
  tag2.name = 'Typeorm';
  await connection.manager.save(tag2);
  console.log('Saved a new tag with id: ' + tag2.id);

  const video1 = new Video();
  video1.channel = channel;
  video1.title = 'Typeorm Migration';
  video1.tags = [tag1, tag2];
  await connection.manager.save(video1);
  console.log('Saved a new video with id: ' + video1.id);

  const video2 = new Video();
  video2.channel = channel;
  video2.title = 'Introduction to Typescript';
  video2.tags = [tag2];
  await connection.manager.save(video2);
  console.log('Saved a new video with id: ' + video2.id);

}