import {User, userModel} from './User'

import {Articel,artModel} from './articel'

var u = new User();
u.username = '张三'
u.password = '123456'

userModel.add(u);


var datas = {
    title:'水浒',
    desc: '起义',
    status: 1
}
var a = new Articel(datas);

artModel.add(a);
