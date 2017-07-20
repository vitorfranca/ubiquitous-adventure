import server from './server';
import resource from './resource';
resource.create('Counter');
resource.create('ToDo');

import { handleRender } from './handleRender';
server.use(handleRender);
